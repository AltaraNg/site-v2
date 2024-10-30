import { Inter, Lexend } from "next/font/google";
import clsx from "clsx";

import "@/styles/tailwind.css";

export const metadata = {
    title: {
        template: "%s - Altara",
        default: "Altara - Unlock Financial Freedom - Collections",
    },
    description:
        "Altara: Empowering Financial Futures. Explore our diverse range of collections and recovery services. Serving individuals and businesses in the formal and informal sectors, Altara provides inclusive financial solutions with transparency and integrity.",
};

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const lexend = Lexend({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lexend",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={clsx("h-full scroll-smooth bg-white antialiased", inter.variable, lexend.variable)}>
            <body className="flex h-full flex-col">{children}</body>
        </html>
    );
}
