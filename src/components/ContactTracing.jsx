import Image from "next/image";
import app from "@/images/contact_tracing.png";
import rebuild from "@/images/recruiting.png";

export function ContactTracing() {
    return (
        <div className="overflow-hidden pb-5 pt-20 sm:pb-10 sm:pt-32 relative">
            <div className="flex justify-center items-center gap-10">
                <div>
                    <Image src={app} alt="phone" width={800} />
                </div>
                <div className="text-2xl font-mono text-amber-600 font-bold">Contact Tracing as a Service</div>
            </div>
            <div className="flex flex-col my-10">
                <h3 className="text-blue-600 text-xl text-center my-5">
                Leverage Altara’s Network to engage and connect clients with absconded customers
                </h3>
                <ul className="w-9/12 mx-auto">
                    <li className="list-item list-['=>'] px-5"> Leverage peer and professional networks to re-engage with defaulting and absent customers</li>
                    <li className="list-item list-['=>'] px-5"> Win-win fee structure: No collection, no fee</li>
                </ul>
            </div>

            <div className="absolute top-0  z-0 opacity-10">
                <Image src={rebuild} alt="phone" />
            </div>
        </div>
    );
}
