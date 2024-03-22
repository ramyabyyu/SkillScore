import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddNewTeacherForm from "./Partials/AddNewTeacherForm";
import CardSection from "@/Components/CardSection";
import TeacherListTable from "./Partials/TeacherListTable";

const List = ({ auth }) => {
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

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <AddNewTeacherForm className="max-w-xl" />
                    </div>
                </div>
            </div>

            <CardSection>
                <TeacherListTable className="max-w-xl" />
            </CardSection>
        </AuthenticatedLayout>
    );
};

export default List;
