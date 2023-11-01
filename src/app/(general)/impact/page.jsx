export default function Impact() {
    return (
        <div className="bg-white py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl font-display">
                        Empowering Lives, Transforming Communities
                    </h2>
                    <p className="mt-6 text-gray-600">
                        At Altara, we take pride in the positive impacts we've had on individuals, businesses, and communities. Our mission is to
                        empower and uplift, and we measure our success by the tangible benefits our services bring.
                    </p>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">30k</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-gray-900 font-display">Customer's Served</p>
                            <p className="mt-2 text-base leading-7 text-gray-600">We have financed over 30k individuals and businesses</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">15</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white font-display">Communities impacted</p>
                            <p className="mt-2 text-base leading-7 text-gray-400">Altara has lives and businesses in more than 15 communities</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">8,093</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white font-display">Transactions this year</p>
                            <p className="mt-2 text-base leading-7 text-indigo-200">
                                We have financed over 8,000 individuals and businesses this year
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
