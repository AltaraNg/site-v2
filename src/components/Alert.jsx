"use client";

import React, { useState, useEffect } from "react";
import { ExclamationTriangleIcon, XMarkIcon, XCircleIcon, InformationCircleIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import cn from "classnames";

export default function Alert({ type = "alert", delay, children, onClose }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (delay) {
            const timer = setTimeout(() => {
                setVisible(false);
                if (onClose) {
                    onClose();
                }
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [delay, onClose]);

    const handleClose = () => {
        setVisible(false);
        if (onClose) {
            onClose(); // Call the onClose function if it's provided
        }
    };

    const color = () => {
        switch (type) {
            case "alert":
                return "border-yellow-400 bg-yellow-50 text-yellow-700";
            case "error":
                return "border-red-500 bg-red-50 text-red-700";
            case "info":
                return "border-blue-400 bg-blue-50 text-blue-700";
            case "success":
                return "border-green-400 bg-green-50 text-green-700";
            default:
                return "border-blue-400 bg-blue-50 text-blue-700";
        }
    };

    return (
        <div className={cn("border-l-4 z-50 absolute p-4 min-w-[20vw] top-4 right-4", color(), { hidden: !visible })}>
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    {type === "alert" && <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />}
                    {type === "error" && <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />}
                    {type === "info" && <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />}
                    {type === "success" && <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />}
                </div>
                <div className="ml-3">{children}</div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button onClick={handleClose} type="button" className="inline-flex rounded-md p-1.5 hover:bg-red-100 focus:outline-none">
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
