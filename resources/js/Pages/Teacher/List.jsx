import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddNewTeacherForm from "./Partials/AddNewTeacherForm";
import CardSection from "@/Components/CardSection";
import TeacherListTable from "./Partials/TeacherListTable";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import FilterListTeacher from "./Partials/FilterListTeacher";
import Table from "@/Components/Table";

const List = ({ auth, searchName }) => {
    const { teachers } = usePage().props;

    useEffect(() => {
        console.log(teachers);
    }, []);

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    List Teacher
                </h2>
            }
        >
            <Head title="List Teacher" />

            <CardSection
                headerTitle={"Filter Teacher"}
                headerSubTitle={"Search teacher by their names."}
                collapsible
                className="pt-12"
            >
                <FilterListTeacher searchName={searchName} />
            </CardSection>

            <CardSection className="py-2" withHeader={false}>
                {/* <TeacherListTable teachers={teachers} /> */}
                <Table
                    tableData={teachers}
                    tableHeaders={["Name", "Email", "Subject"]}
                    tableDataFields={["name", "email", "none"]}
                />
            </CardSection>
        </AuthenticatedLayout>
    );
};

export default List;
