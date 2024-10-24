import Image from "next/image";
import app from "@/images/debt_recovery.png";
import rebuild from "@/images/rebuild_economy.png";

export function DebtRecoveryDetail() {
    return (
        <div className="overflow-hidden pb-5 pt-20 sm:pb-10 sm:pt-32 relative px-20">
            <div className="flex justify-center items-center gap-10">
                <div className="text-2xl font-mono text-amber-600 font-bold">Debt Recovery as a Service</div>
                <div>
                    <Image src={app} alt="phone" width={800} />
                </div>
            </div>
            <div className="flex flex-col my-10">
                <h3 className="text-blue-600 text-xl text-center my-5">
                    Utilize Altara’s proprietary technology and Agent-Network to recover overdue loans from defaulting customers
                </h3>
                <ul className="w-9/12 mx-auto">
                    <li className="list-item list-['=>'] px-5"> Digital: Automated alerts and calls on overdue repayments</li>
                    <li className="list-item list-['=>'] px-5"> In person follow-up: borrower and guarantor</li>
                    <li className="list-item list-['=>'] px-5"> Win-win fee structure: No collection, no fee</li>
                </ul>
            </div>

            <div className="absolute top-0  z-0 opacity-10">
                <Image src={rebuild} alt="phone" />
            </div>
        </div>
    );
}
