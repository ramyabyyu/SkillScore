import React from "react";
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

const AppSidebar = () => {
    return (
        <Sidebar aria-label="SkillScore Sidebar" className="fixed top-0 left-0">
            <Sidebar.Logo
                href="#"
                img="https://flowbite.com/docs/images/logo.svg"
                imgAlt="Flowbite logo"
            >
                <span className="ml-2">Skill</span>
                <span className="text-purple-500">Score</span>
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Collapse
                        icon={HiChartPie}
                        label={<span className="mr-14">E-commerce</span>}
                    >
                        <Sidebar.Item href="#">
                            <span className="ml-7">Products</span>
                        </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item href="#" icon={HiInbox}>
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiTable}>
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default AppSidebar;
