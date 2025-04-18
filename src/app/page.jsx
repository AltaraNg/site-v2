// import { CallToAction } from "@/components/CallToAction";
// import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
// import { Hero } from "@/components/Hero";
// import { Pricing } from "@/components/Pricing";
// import { PrimaryFeatures } from "@/components/PrimaryFeatures";
// import { Testimonials } from "@/components/Testimonials";
import { WhoWeAre } from "@/components/WhoWeAre";
// import { CollectionInfo } from "@/components/CollectionInfo";
// import { Hero2 } from "@/components/Hero2";
// import { Services } from "@/components/Services";
// import { DebtRecoveryDetail } from "@/components/DebtRecoveryDetail";
// import { ContactTracing } from "@/components/ContactTracing";
// import { PortfolioAnalysis } from "@/components/PortfolioAnalysis";
import { CollectionInfo } from "@/components/CollectionInfo";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function Home() {
    return (
        <>
            <Header />
            <CollectionInfo />
            <main className="isolate pb-16">
                {/* Hero section */}
                <div className="relative isolate -z-10">
                    <svg
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
                    </svg>
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                            }}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-4xl font-semibold text-slate-900 sm:text-6xl font-display">Altara Debt Recovery</h1>
                                    <p className="relative mt-6 text-lg text-slate-700 sm:max-w-md lg:max-w-none">
                                        At Altara, we comprehend the difficulties involved in operating a credit business in Nigeria. Many lenders are
                                        compelled to handle the entire range of services, from origination to payment tracking, in order to provide
                                        credit in Nigeria. This dilutes their focus and adds unnecessary distractions to their core lending
                                        operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                    <WhoWeAre />
                </div>

                {/* Content section */}

                {/* Image section */}
                <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <img
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        alt=""
                        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                    />
                </div>

                {/* Values section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-xl font-semibold text-slate-900 sm:text-4xl font-display">WHY CHOOSE ALTARA?</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            We have used our developed technology and collections protocol to reduce our default rate to 3%, which is 7 times better
                            than the average fintech industry.
                        </p>
                    </div>
                    <div className="mx-auto max-w-2xl lg:mx-0 mt-8">
                        <h2 className="text-xl font-semibold text-slate-900 sm:text-4xl font-display">PARTNERS</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">Includes Fintech and Microfinance banks</p>
                    </div>

                    <div className="mx-auto max-w-2xl lg:mx-0 mt-8">
                        <h2 className="text-xl font-semibold text-slate-900 sm:text-4xl font-display">Fee?</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            We operate on <em>NO COLLECTIONS NO FEE</em> principle.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
            <DisclaimerModal />
        </>
    );
}
