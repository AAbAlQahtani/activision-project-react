import React from 'react';

export default function SupportBanner() {
    return (
        <section className="relative flex flex-col-reverse lg:flex-row items-center w-full h-auto lg:h-[270px] overflow-hidden bg-black border-y-1 border-gray-500">
            <div className="w-full lg:w-1/4 px-6 py-6 flex flex-col justify-center text-white z-10 text-center lg:text-left">
                <h2 className="text-xl font-extrabold mb-2">WE'RE HERE TO HELP!</h2>
                <p className="mb-4 text-lg font-semibold leading-snug">
                    Get answers to frequently asked questions, check server status, and engage with a support expert
                </p>
                <button className="hidden md:block px-6 py-2 my-2 w-60 border border-white text-white rounded-full font-semibold hover:bg-[#064a7c] hover:border-3 hover:border-[#0768AF] cursor-pointer ">
                    VISIT SUPPORT
                </button>
            </div>

            <div className="relative w-full lg:w-3/4 h-[200px] lg:h-full">
                <img
                    src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/support-banner-v3.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/5" />
            </div>
        </section>
    );
}
