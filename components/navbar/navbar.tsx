import { Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/router";
import { SupportIcon } from "../icons/navbar/support-icon";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { HouseIcon } from "../icons/breadcrumb/house-icon";

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
          <Breadcrumbs size="lg" separator="/">
            <BreadcrumbItem startContent={<HouseIcon />} href="/painel">Painel</BreadcrumbItem>
            {currentPage == "painel" ? (
              <>
              </>
            ) : (
              <BreadcrumbItem>{capitalizePageText}</BreadcrumbItem>
            )}
          </Breadcrumbs>
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
          {/* <div className="flex items-center gap-2 max-md:hidden">
            <FeedbackIcon />
            <span>Feedback?</span>
          </div> */}

          <NotificationsDropdown />

          <div className="max-md:hidden">
            <SupportIcon />
          </div>

          {/* <Link
            href="https://github.com/Siumauricio/nextui-dashboard-template"
            target={"_blank"}
          >
            <GithubIcon />
          </Link> */}
          <NavbarContent>
            <UserDropdown />
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
