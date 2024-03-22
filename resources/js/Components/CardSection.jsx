import React from "react";

const CardSection = ({ children }) => {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg text-gray-200">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CardSection;
