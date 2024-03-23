import React from "react";
import Pagination from "./Pagination";

const Table = ({ tableHeaders = [], tableData, tableDataFields = [] }) => {
    const { data, links, last_page, from, to, total } = tableData;
    let seq = from;
    return (
        <div className="relative overflow-x-auto w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        {tableHeaders.map((tbh, idx) => (
                            <th key={idx} scope="col" className="px-6 py-3">
                                {tbh}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, idx) => (
                        <tr
                            key={idx}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="px-6 py-4">{seq++}</td>
                            {tableDataFields.map((tblField, tidx) =>
                                tidx === 0 ? (
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        key={tidx}
                                    >
                                        {d[tblField] ?? tblField}
                                    </th>
                                ) : (
                                    <td key={tidx} className="px-6 py-4">
                                        {d[tblField] ?? tblField}
                                    </td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-5 flex justify-between items-center">
                <span class="text-sm text-gray-700 dark:text-gray-400">
                    Showing{" "}
                    <span class="font-semibold text-gray-900 dark:text-white">
                        {from}
                    </span>{" "}
                    to{" "}
                    <span class="font-semibold text-gray-900 dark:text-white">
                        {to}
                    </span>{" "}
                    of{" "}
                    <span class="font-semibold text-gray-900 dark:text-white">
                        {total}
                    </span>{" "}
                    Entries
                </span>
                {last_page > 1 && <Pagination links={links} />}
            </div>
        </div>
    );
};

export default Table;
