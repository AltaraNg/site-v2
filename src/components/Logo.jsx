import Image from "next/image";
import logo from "@/images/logo.png";
import logoDark from "@/images/logo-dark.png";

export function Logo({ customClass = "h-10 w-10", type = "light" }) {
    const src = type === "light" ? logo : logoDark;
    return (
        <div className={`relative ${customClass}`}>
            <Image src={src} alt="Altara Logo" fill />
        </div>
    );
}
