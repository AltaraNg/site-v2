import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
// import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { Download } from "@/components/Download";
import { Testimonials } from "@/components/Testimonials";
// import { WhoWeAre } from "@/components/WhoWeAre";
// import { CollectionInfo } from "@/components/CollectionInfo";
// import { DebtRecovery } from "@/components/DebtRecovery";
import { Hero2 } from "@/components/Hero2";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero2 />
                {/* <WhoWeAre /> */}
                <PrimaryFeatures />
                {/* <CollectionInfo /> */}

                <Download />
                <CallToAction />
                {/* <DebtRecovery /> */}
                <Testimonials />
                <Pricing />
                <Faqs />
            </main>
            <Footer />
        </>
    );
}
