import CardSection from "@/Components/CardSection";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddNewTeacherForm from "./Partials/AddNewTeacherForm";

const Add = ({ auth }) => {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Add Teacher
                </h2>
            }
        >
            <Head title="Add Teacher" />

            <CardSection
                headerTitle={"Add New Teacher"}
                headerSubTitle={"Teacher will be added in the teacher list."}
                className="pt-12"
            >
                <AddNewTeacherForm />
            </CardSection>
        </AuthenticatedLayout>
    );
};

export default Add;
