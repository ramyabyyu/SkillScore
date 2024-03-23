import React, { useState } from "react";

const CardSection = ({
    children,
    headerTitle,
    headerSubTitle,
    withHeader = true,
    collapsible = false,
    defaultCollapseState = false,
    className = "",
}) => {
    const [open, setOpen] = useState(!defaultCollapseState);

    const toggleCollapse = () => setOpen(!open);
    return (
        <div className={className}>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg text-gray-200">
                    <section className={"relative"}>
                        {withHeader && (
                            <header>
                                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                    {headerTitle}
                                </h2>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    {headerSubTitle}
                                </p>
                            </header>
                        )}
                        {collapsible ? (
                            <>
                                {open && <>{children}</>}
                                <button
                                    className="absolute bottom-2 right-2 bg-white rounded-full p-2 text-gray-600 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-800"
                                    onClick={toggleCollapse}
                                >
                                    {open ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 15l7-7 7 7"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </>
                        ) : (
                            <>{children}</>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CardSection;
