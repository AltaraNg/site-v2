"use client";

import { useState } from "react";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import Alert from "@/components/Alert";

export default function Contact() {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        if (loading) {
            return;
        }
        setLoading(true);
        const body = JSON.stringify(data);
        try {
            const res = await fetch("/api/message", {
                method: "POST",
                headers: {
                    accept: "application/json",
                },
                body,
            });
            await res.json();
            setLoading(false);
            if (res.status !== 200) {
                setErrorMessage("An error occurred, please contact the administrator");
                return;
            }
            setSuccessMessage("Message sent successfully, we will get back to you shortly");
            reset();
        } catch (error) {
            setErrorMessage("An error occurred, please contact the administrator");
            setLoading(false);
        }
    };

    return (
        <>
            {error && (
                <Alert type="alert" delay={5000} onClose={() => setError(false)}>
                    <p>{errorMessage}</p>
                </Alert>
            )}
            {successMessage && (
                <Alert type="success" delay={5000} onClose={() => setSuccessMessage("")}>
                    <p>{successMessage}</p>
                </Alert>
            )}
            <div className="relative isolate bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                                <svg
                                    className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                            width={200}
                                            height={200}
                                            x="100%"
                                            y={-1}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path d="M130 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                                    <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                        <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                    </svg>
                                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-semibold text-slate-900 font-display">Get in touch</h2>
                            <p className="mt-6 text-gray-600">
                                Have questions, feedback, or need assistance? We'd love to hear from you. Contact us using the information below:
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        46 Raymond Njoku, Ikoyi,
                                        <br />
                                        Ikoyi, Lagos, Nigeria.
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Telephone</span>
                                        <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-gray-900" href="tel:+234 905 5493 652">
                                            +234 905 5493 652
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-gray-900" href="mailto:accounts@altaracredit.com">
                                            accounts@altaracredit.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                            <p className="font-semibold mt-8 font-display">Opening Hours</p>
                            <ul className="list-none text-gray-600 mt-1">
                                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                                <li>Saturday: 10:00 AM - 4:00 PM</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            {...register("firstname", { required: true })}
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.firstname && <span className="text-xs text-red-500">Firstname is required</span>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            {...register("lastname", { required: "Lastname is required" })}
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.lastname && (
                                            <span role="alert" className="text-xs text-red-500">
                                                {errors.lastname.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            {...register("email", {
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: "Entered value does not match email format",
                                                },
                                            })}
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.email && (
                                            <span role="alert" className="text-xs text-red-500">
                                                {errors.email.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            {...register("phone", {
                                                required: "We need your phone number to contact you",
                                                minLength: {
                                                    value: 11,
                                                    message: "Phone number must have at least 11 characters",
                                                },
                                                maxLength: {
                                                    value: 11,
                                                    message: "Phone number must have at most 11 characters",
                                                },
                                            })}
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.phone && (
                                            <span role="alert" className="text-xs text-red-500">
                                                {errors.phone.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            {...register("message", { required: "Your message is important to us" })}
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={""}
                                        />
                                        {errors.message && (
                                            <span role="alert" className="text-xs text-red-500">
                                                {errors.message.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 min-w-[140px]"
                                >
                                    {loading ? "Sending" : "Send message"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
