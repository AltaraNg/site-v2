// import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import app from "@/images/economy_analysis.png";
import Image from "next/image";

export function Hero2() {
    return (
        <Container className="pb-16 pt-20 text-center min-h-screen relative">
            <div className="absolute top-0 -z-10 opacity-30">
                <Image src={app} alt="phone" width={1200} />
            </div>
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                Unlock{" "}
                <span className="relative whitespace-nowrap text-blue-600">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute left-0 top-0 h-[0.58em] w-full fill-blue-300/70"
                        preserveAspectRatio="none"
                    >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                    </svg>
                    <span className="relative">Financial Freedom</span>
                </span>{" "}
                with Altara.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 font-medium z-10">
                Welcome to Altara, where financial empowerment meets convenience.What started as a digital lending platform has now become a{" "}
                <b>full stack</b> service provider for <span className="text-blue-600 font-bold">debt recovery</span>
            </p>

            {/* <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 font-medium">
            We make our partners' problems our problems.
             <br />. We preserve a company and
                prevent it from shutting down.<br></br> Problem: Too many recovery services, overpromise, and underdelivery.<br></br> At Altara we practice what we
                preach.
            </p> */}
        </Container>
    );
}
