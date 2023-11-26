import { Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/router";
import { SupportIcon } from "../icons/support-icon";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { HouseIcon } from "../icons/house-icon";
import { container } from "../motion/motionSettings";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const { asPath } = useRouter();

  const pathParts = asPath.split('/');
  const currentPage = pathParts[1];
  const capitalizePageText = currentPage.charAt(0).toUpperCase() + currentPage.slice(1).replace(/-/g, ' ');

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>

        <NavbarContent className="max-md:hidden">
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <Breadcrumbs size="lg" separator="/">
              <BreadcrumbItem startContent={<HouseIcon />} href="/painel">Painel</BreadcrumbItem>
              {currentPage == "painel" ? (
                <>
                </>
              ) : (
                <BreadcrumbItem>{capitalizePageText}</BreadcrumbItem>
              )}
            </Breadcrumbs>
          </motion.ul>
        </NavbarContent>

        <NavbarContent className="w-full max-md:hidden">
          {/* <Input
            startContent={<SearchIcon />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          /> */}
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <NotificationsDropdown />
          </motion.ul>

          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="max-md:hidden">
              <SupportIcon />
            </div>
          </motion.ul>
          <NavbarContent>
            <motion.ul
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <UserDropdown />
            </motion.ul>
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};