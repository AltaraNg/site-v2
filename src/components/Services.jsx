"use client";

import { BanknotesIcon, CurrencyDollarIcon, HomeIcon, PlusCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import app from "@/images/bank_deal.png";
import Image from "next/image";


export function Services() {
    return (
        <section id="service" aria-label="Features for simplifying everyday business tasks" className="pb-14 pt-20 sm:pb-32 sm:pt-32 relative">
            <div className="md:text-center sm:flex items-center gap-8 px-8 sm:px-16 mx-auto max-w-7xl">
                <div className="flex-auto">By helping supporting lender's operations with their collections operations</div>
                <div className="flex gap-3 items-center justify-center">
                    <div className="flex flex-col gap-3 justify-center items-center border border-r-4 border-l-0 border-t-0 border-b-4 rounded-lg p-5">
                        <div className="rounded-full inline fill-slate-950">
                            <PlusIcon className="text-blue-500 size-10" />
                        </div>
                        <div className="text-purple-700 font-medium text-lg">Debt Recovery AS</div>
                        <div className="text-sm">Assist clients with customer and guarantor follow up</div>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center border border-r-4 border-l-0 border-t-0 border-b-4 rounded-lg p-5">
                        <div>
                            <HomeIcon className="text-blue-500 size-10" />
                        </div>
                        <div className="text-purple-700 font-medium text-xl">Customer Reengagement AS</div>
                        <div className="text-sm">Provide contact tracing services. Ensure the location and contact information of lost clients.</div>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center border border-r-4 border-l-0 border-t-0 border-b-4 rounded-lg p-5">
                        <div>
                            <BanknotesIcon className="text-blue-500 size-10" />
                        </div>
                        <div className="text-purple-700 font-medium text-lg">Portfolio Recovery Analytics AS</div>
                        <div className="text-sm">Real time analytics of overdue and nonperforming loans + data supporting repayment risk</div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 -z-10 opacity-5">
                <Image src={app} alt="phone" width={600} />
            </div>
            <div className="absolute top-0 left-0 -z-10 opacity-5">
                <Image src={app} alt="phone" width={600} />
            </div>
        </section>
    );
}
