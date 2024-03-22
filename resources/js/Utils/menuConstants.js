import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiOutlineMinusSm,
    HiOutlinePlusSm,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiOutlineUserGroup,
} from "react-icons/hi";

export const menus = [
    {
        multiMenu: false,
        href: route("dashboard"),
        icon: HiChartPie,
        title: "Dashboard",
        routeName: "dashboard",
        checkBy: "none",
        role: "",
        permission: "",
    },
    {
        multiMenu: true,
        icon: HiOutlineUserGroup,
        title: "Manage Teacher",
        checkBy: "role",
        role: "principal",
        permission: "manage_teacher",
        children: [
            {
                title: "Teacher List",
                checkBy: "permission",
                permission: "manage_teacher",
                href: route("teacher.list"),
                routeName: "teacher.list",
            },
        ],
    },
];
