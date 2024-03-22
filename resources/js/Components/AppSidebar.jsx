import React, { useEffect } from "react";
import { Sidebar } from "flowbite-react";
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiOutlineMinusSm,
    HiOutlinePlusSm,
    HiShoppingBag,
    HiTable,
    HiUser,
} from "react-icons/hi";
import { menus } from "@/Utils/menuConstants";
import { Link } from "@inertiajs/react";
import AppSidebarList from "./Partials/AppSidebarList";
import { checkAuthorization } from "@/Utils/checkAuthorization";

const AppSidebar = ({ auth }) => {
    useEffect(() => {
        console.log(menus);
    }, []);
    return (
        <Sidebar
            aria-label="SkillScore Sidebar"
            className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        >
            <Sidebar.Logo
                href={route("dashboard")}
                img="https://flowbite.com/docs/images/logo.svg"
                imgAlt="Flowbite logo"
            >
                <span className="ml-2">Skill</span>
                <span className="text-indigo-500">Score</span>
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {menus.map(
                        (menu, index) =>
                            checkAuthorization(auth, menu) && (
                                <AppSidebarList
                                    key={index}
                                    active={route().current(menu.routeName)}
                                    menu={menu}
                                />
                            )
                    )}
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default AppSidebar;
