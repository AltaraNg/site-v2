import { CallToAction } from "@/components/CallToAction";
import { Download } from "@/components/Download";
import { Faqs } from "@/components/Faqs";
import { Hero2 } from "@/components/Hero2";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { Testimonials } from "@/components/Testimonials";

export default function OtherServices() {
    return (
        <>
            <main>
                <Hero2 />
                {/* <WhoWeAre /> */}
                <PrimaryFeatures />
                <Download />
                {/* <CollectionInfo /> */}
                <CallToAction />
                {/* <DebtRecovery /> */}
                <Testimonials />
                <Pricing />
                <Faqs />
            </main>
        </>
    );
}
