import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";

const FilterListTeacher = ({ searchName }) => {
    const { data, setData, get, errors } = useForm({
        name: searchName,
    });

    const search = (e) => {
        e.preventDefaullt();
        get(route("teacher.list"));
    };

    return (
        <form action="" onSubmit={search} className="mt-6 space-y-6 w-4/5">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <InputLabel htmlFor="name" value={"Name"} />
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="mt-1 block w-full"
                        placeholder="Search teacher by name..."
                    />
                </div>
                <div>
                    <InputLabel htmlFor="subject" value={"Subject"} />
                    <TextInput
                        id="subject"
                        name="subject"
                        type="text"
                        className="mt-1 block w-full"
                        placeholder="Search teacher by subject..."
                    />
                </div>
                <div>
                    <Button variant="purple-colored-shadows" type="submit">
                        Search
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default FilterListTeacher;
