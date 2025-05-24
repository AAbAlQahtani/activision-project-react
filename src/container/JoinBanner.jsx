import React from 'react';

export default function JoinBanner() {
    return (
        <section className="relative w-full overflow-hidden bg-black">

            <div className="relative w-full h-[420px] lg:h-[300px]">
                <img
                    src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/joinus-banner-img-spyro.png"
                    alt=""
                    className="w-full h-full object-cover absolute inset-0 z-0"
                />

                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.9)_0%,transparent_50%),linear-gradient(to_left,rgba(0,0,0,0.7)_0%,transparent_50%)]" />

                <div className="absolute inset-0 z-20 px-6 lg:px-16 hidden lg:flex flex-row items-center justify-between w-full h-full text-white">

                    <div className="text-left">
                        <h2 className="text-5xl font-bold text-[#0768AF] mb-2">HAVE FUN</h2>
                        <p className="text-2xl w-60 mb-4">Learn More About Job Opportunities</p>
                        <button className="px-6 py-2 w-60 border border-white text-white rounded-full font-semibold hover:bg-[#064a7c] hover:border-3 hover:border-[#0768AF] cursor-pointer">
                            JOIN US
                        </button>
                    </div>

                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-4">OUR TEAMS</h3>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-1 font-semibold">
                            <div>
                                <p>GAME DESIGN</p>
                                <p>ART & ANIMATION</p>
                                <p>BRAND MANAGEMENT</p>
                                <p>PRODUCTION</p>
                                <p>QUALITY ASSURANCE</p>
                            </div>
                            <div>
                                <p>CUSTOMER SUPPORT</p>
                                <p>STUDIO OPERATIONS</p>
                                <p>PROGRAMMING</p>
                                <p>FINANCE & ACCOUNTING</p>
                                <p>HUMAN RESOURCES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block lg:hidden text-center text-white px-6 py-8">
                <h2 className="text-3xl font-bold text-[#0768AF] mb-2">HAVE FUN</h2>
                <p className="text-lg mb-4">Learn More About Job Opportunities</p>
                <button className="px-6 py-2 border border-white text-white rounded-full font-semibold hover:bg-[#064a7c] hover:border-3 hover:border-[#0768AF] cursor-pointer">
                    JOIN US
                </button>
            </div>
        </section>
    );
}
