import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React from "react";

const FilterListTeacher = () => {
    return (
        <form action="" className="mt-6 space-y-6 w-4/5">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <InputLabel htmlFor="name" value={"Name"} />
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
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
                    <Button variant="pink-colored-shadows">Search</Button>
                </div>
            </div>
        </form>
    );
};

export default FilterListTeacher;
