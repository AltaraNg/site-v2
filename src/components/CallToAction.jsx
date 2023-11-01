import Image from "next/image";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-call-to-action.jpg";

const steps = [
    {
        title: "Quick & Easy Registration",
        description: "Register for an account in just a few minutes.",
    },
    {
        title: "Loan Offers in Minutes",
        description: "Your request will be processed in minutes and you will be notified of your loan status.",
    },
    {
        title: "Funds Direct to Your Account",
        description: "There are no hidden fees or charges. Funds are deposited directly into your account as soon as the next business day.",
    },
];

export function CallToAction() {
    return (
        <section id="get-started-today" className="relative overflow-hidden bg-blue-600 py-16 sm:py-32 px-4 sm:px-0">
            <Image
                className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                src={backgroundImage}
                alt=""
                width={2347}
                height={1244}
                unoptimized
            />
            <Container className="relative">
                <div className="mx-auto max-w-5xl text-center text-white">
                    <h2 className="font-display text-3xl tracking-tight sm:text-4xl">How it works</h2>
                    <p className="mt-2 text-lg font-medium">
                        A Better <span className="font-semibold">Personal Money Solution</span> To Get Funds Fast, Anywhere!
                    </p>
                    <div className="sm:flex gap-4">
                        {steps.map((step, index) => (
                            <div key={step.title} className="flex-1 mt-4 sm:mt-16 px-4 rounded-md shadow-md bg-white/10 py-6 text-left">
                                <div
                                    className={`text-4xl flex items-center justify-center w-16 font-semibold ${
                                        index == 1 ? "bg-orange-300" : "bg-blue-950"
                                    }`}
                                >
                                    {index + 1}
                                </div>
                                <h3 className="font-display text-lg font-semibold mt-4">{step.title}</h3>
                                <p className="text-sm font-medium">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
