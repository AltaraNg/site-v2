import Image from "next/image";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-faqs.jpg";

const faqs = [
    [
        // {
        //     question: "How do I go about getting a product?",
        //     answer: "You can fill in the enquiry form online and an agent will reach out to you. Next steps will involve getting your KYC documents, registering on our system speedy verification and you can pick up the product at our closest branch near you.",
        // },
        {
            question: "What type of customers does Altara serve?",
            answer: "Our satisfied customers Include Fintechs and Microfinance banks",
        },
        // {
        //     question: "Can I repay my loan early without any penalties?",
        //     answer: "Yes, you can repay your loan early with Altara without incurring any penalties. We believe in providing you with flexibility and control over your financial commitments.",
        // },
    ],
    [
        {
            question: "Where is Altara Located?",
            answer: "We have our head office at 46 Raymond Njoku, Ikoyi, Lagos, Nigeria. We currently have several branches across Oyo and Kwara including major cities such as Ibadan, Ogbomosho & Ilorin. We are growing quickly and expanding to more communities near you",
        },
        // {
        //     question: "How long does it take to get approved for a loan?",
        //     answer: "The approval process varies depending on the type of loan and the completeness of your application. In many cases, approvals can be provided within 24-48 hours.",
        // },
    ],
    [
        // {
        //     question: "Are there restrictions on what I can buy or the amount I can loan?",
        //     answer: "We have calculators and approval criteria tailored to suit individual's earning capacity.",
        // },
    ],
];

export function Faqs() {
    return (
        <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
            <Image
                className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
                src={backgroundImage}
                alt=""
                width={1558}
                height={946}
                unoptimized
            />
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 id="faq-title" className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        If you can’t find what you’re looking for, email our support team and someone will get back to you.
                    </p>
                </div>
                <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="flex flex-col gap-y-8">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="font-display text-lg leading-7 text-slate-900">{faq.question}</h3>
                                        <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
