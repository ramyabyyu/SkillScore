import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
} from "flowbite-react";
import { Link } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";

const TeacherListTable = ({ teachers }) => {
    const { data, links } = teachers;
    return (
        <div class="relative overflow-x-auto w-full">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Subject
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((t, idx) => (
                        <tr
                            key={idx}
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {t.name}
                            </th>
                            <td class="px-6 py-4">{t.email}</td>
                            <td class="px-6 py-4">None</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-5 flex justify-end">
                <Pagination links={links} />
            </div>
        </div>
    );
};

export default TeacherListTable;
