import React from "react";
import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
    return (
        <nav aria-label="SkillScore Pagination">
            <ul className="inline-flex -space-x-px text-base h-10">
                {links.map((link, idx) => (
                    <li key={idx}>
                        {link.label === "..." ? (
                            <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                ...
                            </span>
                        ) : (
                            <Link
                                href={link.url}
                                className={`${
                                    link.label === "&laquo; Previous" ||
                                    link.label === "Next &raquo;"
                                        ? "flex items-center justify-center px-3 h-8 ms-0 leading-tight  border border-e-0 border-gray-300 rounded-s-lg  dark:border-gray-700 "
                                        : "flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 dark:border-gray-700 "
                                } ${
                                    link.active
                                        ? " text-gray=700  bg-gray-100  dark:bg-gray-700  dark:text-white  "
                                        : " text-gray-500 bg-white  hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                                }`}
                            >
                                {link.label === "&laquo; Previous"
                                    ? "Previous"
                                    : link.label === "Next &raquo;"
                                    ? "Next"
                                    : link.label}
                            </Link>
                        )}
                    </li>
                ))}
                {/* {links.length > 10 && (
                    <>
                        <li>...</li>
                        <li>
                            <Link
                                href={links[links.length - 1].href}
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                {links.length}
                            </Link>
                        </li>
                    </>
                )} */}
            </ul>
        </nav>
    );
};

export default Pagination;
