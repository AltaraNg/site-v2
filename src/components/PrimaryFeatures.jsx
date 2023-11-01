"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-features.jpg";
import L1 from "@/images/L1.jpg";
// import L2 from "@/images/L2.jpg";
// import L3 from "@/images/L3.jpg";
// import L4 from "@/images/L4.jpg";

const features = [
    {
        title: "Diverse Audience, Personalized Solutions",
        description: "From the formal sector to the informal, Altara caters to everyone, ensuring financial inclusivity for all.",
        image: L1,
    },
    {
        title: "Transparent and Competitive Rates",
        description: "We believe in fairness. Our rates are clear and competitive, designed to empower rather than burden.",
        image: L1,
    },
    {
        title: "Unparalleled Support",
        description: "Our team is here to guide you through every step of the process, ensuring you have the information and resources you need.",
        image: L1,
    },
    {
        title: "Trust and Security",
        description: "Your financial security is our top priority. Altara employs the latest technology to safeguard your information.",
        image: L1,
    },
];

export function PrimaryFeatures() {
    let [tabOrientation, setTabOrientation] = useState("horizontal");

    useEffect(() => {
        let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

        function onMediaQueryChange({ matches }) {
            setTabOrientation(matches ? "vertical" : "horizontal");
        }

        onMediaQueryChange(lgMediaQuery);
        lgMediaQuery.addEventListener("change", onMediaQueryChange);

        return () => {
            lgMediaQuery.removeEventListener("change", onMediaQueryChange);
        };
    }, []);

    return (
        <section id="features" aria-label="Features for running your books" className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32">
            <Image
                className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
                src={backgroundImage}
                alt=""
                width={2245}
                height={1636}
                unoptimized
            />
            <Container className="relative">
                <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">Why Choose Altara?</h2>
                    <p className="mt-6 text-lg tracking-tight text-blue-100">
                        Well everything you need if you aren’t that picky about minor details like tax compliance.
                    </p>
                </div>
                <Tab.Group
                    as="div"
                    className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
                    vertical={tabOrientation === "vertical"}
                >
                    {({ selectedIndex }) => (
                        <>
                            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                                    {features.map((feature, featureIndex) => (
                                        <div
                                            key={feature.title}
                                            className={clsx(
                                                "group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
                                                selectedIndex === featureIndex
                                                    ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
                                                    : "hover:bg-white/10 lg:hover:bg-white/5"
                                            )}
                                        >
                                            <h3>
                                                <Tab
                                                    className={clsx(
                                                        "font-display text-lg ui-not-focus-visible:outline-none",
                                                        selectedIndex === featureIndex
                                                            ? "text-blue-600 lg:text-white"
                                                            : "text-blue-100 hover:text-white lg:text-white"
                                                    )}
                                                >
                                                    <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                                                    {feature.title}
                                                </Tab>
                                            </h3>
                                            <p
                                                className={clsx(
                                                    "mt-2 hidden text-sm lg:block",
                                                    selectedIndex === featureIndex ? "text-white" : "text-blue-100 group-hover:text-white"
                                                )}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </Tab.List>
                            </div>
                            <Tab.Panels className="lg:col-span-7">
                                {features.map((feature) => (
                                    <Tab.Panel key={feature.title} unmount={false}>
                                        <div className="relative sm:px-6 lg:hidden">
                                            <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                                            <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">{feature.description}</p>
                                        </div>
                                        <div className="mt-10 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 min-w-[40rem] min-h-[40rem] relative">
                                            <Image className="w-full" src={feature.image} alt="" priority fill />
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </>
                    )}
                </Tab.Group>
            </Container>
        </section>
    );
}
