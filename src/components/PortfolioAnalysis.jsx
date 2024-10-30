import Image from "next/image";
import app from "@/images/portfolio_analysis.png";
import rebuild from "@/images/analysis.png";

export function PortfolioAnalysis() {
    return (
        <div className="overflow-hidden pb-5 pt-20 sm:pb-10 sm:pt-32 relative px-20">
            <div className="flex justify-center items-center gap-10">
                <div className="text-2xl font-mono text-amber-600 font-bold">Portfolio Analytics as a Service</div>
                <div>
                    <Image src={app} alt="phone" width={800} />
                </div>
            </div>
            <div className="flex flex-col my-10">
                <h3 className="text-blue-600 text-xl text-center my-5">
                    For companies that prefer to do recovery in house, utilize Altara’s technology to understand the likelihood of a defaulted
                    customer re-engaging and repaying.
                </h3>
                <ul className="w-9/12 mx-auto">
                    <li className="list-item list-['=>'] px-5"> Allows for better utilization of internal resources</li>
                    <li className="list-item list-['=>'] px-5"> Maximized capital</li>
                    <li className="list-item list-['=>'] px-5"> Instrumental in assessing the quality of internal recovery team</li>
                </ul>
            </div>

            <div className="absolute top-0  z-0 opacity-10">
                <Image src={rebuild} alt="phone" />
            </div>
        </div>
    );
}
