import React from "react";
import { Sidebar } from "./sidebar.styles";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import { HomeIcon } from "../icons/home-icon";
import { AccountsIcon } from "../icons/accounts-icon";
import { ReportsIcon } from "../icons/reports-icon";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../layout/layout-context";
import { useRouter } from "next/router";
import { SheepIcon } from "../icons/sheep-icon";
import { GoatIcon } from "../icons/goat-icon";
import { GlobeIcon } from "../icons/globe-icon";
import { UsersIcon } from "../icons/users-icon";
import { container, item } from "../motion/motionSettings";

export const SidebarWrapper = () => {
  const router = useRouter();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[202] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <Image
            isBlurred
            src={'https://i.imgur.com/3ohMiBA.png'}
            alt="Cabanha M.Sol Logo"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className={Sidebar.Body()}>
              <motion.li className="item" variants={item}>
                <SidebarItem
                  title="Painel"
                  icon={<HomeIcon />}
                  isActive={router.pathname === "/"}
                  href="/painel"
                />
              </motion.li>
              <motion.ul
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <SidebarMenu title="Menus">
                  <motion.li className="item" variants={item}>
                    <SidebarItem
                      isActive={router.pathname === "/ovelhas"}
                      title="Ovelhas"
                      href="/ovelhas"
                      icon={<SheepIcon />}
                    />
                  </motion.li>
                  {/* <CollapseItems
                icon={<BalanceIcon />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                title="Balances"
              /> */}
                  <motion.li className="item" variants={item}>
                    <SidebarItem
                      isActive={router.pathname === "/reprodutores"}
                      title="Reprodutores"
                      href="/reprodutores"
                      icon={<GoatIcon />}
                    />
                  </motion.li>
                  <motion.li className="item" variants={item}>
                    <SidebarItem
                      isActive={router.pathname === "/racas"}
                      title="Raças"
                      href="/racas"
                      icon={<GlobeIcon />}
                    />
                  </motion.li>
                  <motion.li className="item" variants={item}>
                    <SidebarItem
                      isActive={router.pathname === "/usuarios"}
                      title="Usuários"
                      href="/usuarios"
                      icon={<UsersIcon />}
                    />
                  </motion.li>
                </SidebarMenu>
              </motion.ul>
            </div>
          </motion.ul>
          {/* <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div> */}
        </div>
      </div>
    </aside>
  );
};
