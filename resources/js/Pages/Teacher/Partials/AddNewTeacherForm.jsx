import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import Button from "@/Components/Button";

const AddNewTeacherForm = () => {
    const {
        data,
        setData,
        post,
        errors,
        processing,
        recentlySuccessful,
        reset,
    } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("teacher.store"));
    };

    return (
        <form onSubmit={submit} className="mt-6 space-y-6 w-4/5">
            <div className="grid grid-cols-2 gap-2">
                <div className="my-3">
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div className="my-3">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        className="mt-1 block w-full"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        required
                        autoComplete="password"
                    />

                    <InputError className="mt-2" message={errors.password} />
                </div>
                <div className="my-3">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div className="my-3" s>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Password Confirmation"
                    />

                    <TextInput
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        className="mt-1 block w-full"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                        autoComplete="password"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.password_confirmation}
                    />
                </div>

                <div className="flex items-center gap-1 mt-1">
                    <Button
                        disabled={processing}
                        type="submit"
                        variant="purple-colored-shadows"
                    >
                        Save
                    </Button>
                    <Button
                        disabled={processing}
                        type="button"
                        variant="red-colored-shadows"
                        onClick={() => reset()}
                    >
                        Reset
                    </Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </div>
        </form>
    );
};

export default AddNewTeacherForm;
