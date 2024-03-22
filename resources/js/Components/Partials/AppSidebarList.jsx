import React, { useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { Link } from "@inertiajs/react";

const AppSidebarList = ({ active, menu }) => {
    useEffect(() => {
        console.log(menu.multiMenu);
        console.log(menu);
    }, []);
    if (menu.multiMenu) {
        return (
            <Sidebar.Collapse
                icon={menu.icon}
                label={<span className="mr-8">{menu.title}</span>}
            >
                {menu.children.map((child, index) => (
                    <Sidebar.Item
                        key={index}
                        href={child.href}
                        as={Link}
                        className={`${
                            active
                                ? "border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 "
                                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700"
                        }`}
                    >
                        <span className="ml-11">{child.title}</span>
                    </Sidebar.Item>
                ))}
            </Sidebar.Collapse>
        );
    } else {
        return (
            <>
                <Sidebar.Item
                    as={Link}
                    href={menu.href}
                    icon={menu.icon}
                    className={`${
                        active
                            ? "border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 "
                            : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700"
                    }`}
                >
                    <span className="ml-4">{menu.title}</span>
                </Sidebar.Item>
            </>
        );
    }
};

export default AppSidebarList;
