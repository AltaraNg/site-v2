"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import app from "@/images/app.jpeg";

export function Download() {
    return (
        <section id="download" aria-label="Features for simplifying everyday business tasks" className="pb-14 pt-20 sm:pb-32 sm:pt-32">
            <div className="md:text-center sm:flex items-center gap-8 px-8 sm:px-16 mx-auto max-w-7xl">
                <div className="flex-1">
                    <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl mt-4 sm:mt-16">Download the Altara App</h2>
                    <p className="italic">Stay in Control of Your Finances, Anytime, Anywhere</p>
                    <p className="mt-8 text-lg tracking-tight text-slate-700">
                        Managing your loans and Buy Now Pay Later options has never been easier. Download the Altara app now and take full control of
                        your financial journey.
                    </p>
                    <Button href="/app-download" variant="solid" color="blue" className="w-full mt-4 sm:mt-16 sm:max-w-sm">
                        <span>Download Now</span>
                    </Button>
                </div>
                <div className="sm:w-[20rem] relative mt-6 sm:mt-0">
                    <Image src={app} alt="phone" sizes="20rem" />
                </div>
            </div>
        </section>
    );
}
