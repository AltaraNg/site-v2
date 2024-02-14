"use client";

// import Image from "next/image";
// import { Button } from "@/components/Button";
// import app from "@/images/app.jpeg";
import { Hero } from "./Hero";
const stats = [
    { label: "Formal employees are within our coverage", value: "Salaried Workers" },
    { label: "Traders, contractors and other informal employees", value: "Non-salaried Workers" },
    { label: "We cater for big businesses too", value: "Medium sized enterprises" },
    { label: "Mico enterprises are not left out", value: "Small (and Micro) enterprises" },
];

export function CollectionInfo() {
    return (
        <section id="collections" aria-label="Features for simplifying everyday business tasks" className="pb-14 pt-20 sm:pb-32 sm:pt-32">
            <Hero />
            <div className="mx-auto -mt-10 max-w-7xl px-6 sm:mt-0 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl mt-6 font-semibold text-slate-900 sm:text-4xl font-display">Our Service Coverage</h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <div className="mt-10 max-w-xl text-xl leading-7 text-gray-700">
                                <p>
                                We have developed the ability to collect from a wide range of borrowers by using a combination of technology and manual processes to ensure successful repayment. Our operational reach extends to the South-Western region of Nigeria, including Oyo, Ogun, and Kwara, and we are continuously expanding. Unlike many other providers in the market, we have a strong presence in this region.
                                </p>
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-auto lg:justify-center">
                            <dl className="w-64 space-y-8 xl:w-80">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                        <dt className="text-base leading-7 text-gray-600 font-display">{stat.label}</dt>
                                        <dd className="text-2xl font-semibold tracking-tight text-gray-900 font-display">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
