"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { useDetectClickOutside } from "react-detect-click-outside";
import { cashLoan, money } from "@/utils/utils";

export function Calculator() {
    const [displayDropdown, setDisplayDropdown] = useState(false);
    const [amount, setAmount] = useState(10000);
    const [selectedOption, setSelectedOption] = useState(2);
    const [details, setDetails] = useState({});

    const closeDropdown = () => {
        setDisplayDropdown(false);
    };

    const onAmountEntered = (event) => {
        const { value } = event.target;
        if (!isNaN(value)) {
            setAmount(value);
        }
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCal = () => {
        const response = cashLoan(amount);
        setDetails({ downpayment: response.actualDownpayment, repayment: response.biMonthlyRepayment * selectedOption, count: 12 / selectedOption });
        setDisplayDropdown(true);
    };

    const ref = useDetectClickOutside({ onTriggered: closeDropdown });
    return (
        <div className="mx-auto max-w-2xl shadow-2xl shadow-blue-300 relative rounded-md p-2 font-display" ref={ref}>
            <div className="sm:flex rounded-md divide-y sm:divide-y-0 sm:divide-x">
                <div className="sm:w-2/5 p-2">
                    <label className="block text-xs text-slate-700 text-left font-medium">Loan Amount</label>
                    <input type="number" className="w-full strip" onChange={onAmountEntered} value={amount} />
                </div>
                <div className="sm:w-2/5 p-2">
                    <label className="block text-xs text-slate-700 text-left font-medium">Repayment Cycle</label>
                    <select className="w-full strip" value={selectedOption} onChange={handleSelectChange}>
                        <option value={1}>BiMonthly</option>
                        <option value={2}>Monthly</option>
                    </select>
                </div>
                <div className="flex-1 px-2 py-4 flex items-center">
                    <Button color="blue" className="w-full h-full" onClick={handleCal}>
                        Calculate
                    </Button>
                </div>
            </div>
            {displayDropdown && (
                <div className="absolute inset-x-0 z-20 rounded-md mt-4 p-8 bg-white">
                    <div>
                        <div className="flex justify-between bg-slate-100 p-4 rounded-md">
                            <div className="text-left">
                                <p className="text-xs text-slate-700">Downpayment:</p>
                                <p className="text-2xl text-slate-900 font-semibold">{money(details.downpayment)}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    20%
                                </span>
                                <p className="text-blue-900 font-medium text-xl">6Months</p>
                            </div>
                        </div>
                        <div className="mt-6 overflow-x-auto">
                            <p className="text-md font-semibold underline">Your Repayments</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 text-left gap-2 md:gap-4 mt-2">
                                {Array.from({ length: details.count }, (_, i) => (
                                    <div key={i} className="px-4 py-2 rounded-md bg-blue-50">
                                        <p className="text-xs font-medium text-pink-500">Payment {i + 1}</p>
                                        <p className="text-xl font-semibold">{money(details.repayment)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button color="slate" className="max-w-7xl w-1/2 mt-8 rounded-md" href="/app-download">
                            Get Started
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
