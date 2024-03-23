import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddNewTeacherForm from "./Partials/AddNewTeacherForm";
import CardSection from "@/Components/CardSection";
import TeacherListTable from "./Partials/TeacherListTable";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import FilterListTeacher from "./Partials/FilterListTeacher";

const List = ({ auth }) => {
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
                defaultCollapseState
                className="pt-12"
            >
                <FilterListTeacher />
            </CardSection>

            <CardSection className="py-2" withHeader={false}>
                <TeacherListTable teachers={teachers} />
            </CardSection>
        </AuthenticatedLayout>
    );
};

export default List;
