import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa6";

const news = [
    {
        date: "MAY 20, 2025",
        title: "Stitch Returns in Season 04",
        image: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
        description: "Following a daring jailbreak conducted by his former adversary, Stitch’s clandestine resurrection is achieved and he returns to the fray with orders to crack the codes needed to uncover the Pantheon moles. Get the backstory on his intense rivalry turned uneasy alliance with Russell Adler and deploy as the..."
    },
    {
        date: "MAY 15, 2025",
        title: "Support C.O.D.E. Military Appreciation Month with USAA",
        image: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
        description: "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack and the C.O.D.E. Got Your Six Event."
    },
    {
        date: "MAY 09, 2025",
        title: "Tony Hawk’s Pro Skater 3 + 4: THPS",
        image: "https://www.activision.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
        description: "THPS Fest at the El Rey Theater in Los Angeles celebrated the return of Tony Hawk’s Pro Skater 3 + 4 by providing a closer look at some of the levels, skaters, and other new features coming to the game. See what the event was all about, including previously revealed content arriving at launch on July 11."
    },
    {
        date: "MAY 07, 2025",
        title: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
        image: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
        description: "#TeamRICOCHET Season 03 Recap and Update"
    },
    {
        date: "MAY 01, 2025",
        title: "C.O.D.E. celebrates Military Appreciation Month with USAA",
        image: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
        description: "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack, the C.O.D.E. Got Your Six Event, Kane Brown High Road Challenge, and more."
    },
    {
        date: "APR 29, 2025",
        title: "Black Ops 6 Season 03 Reloaded",
        image: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
        description: "Season 03 Reloaded brings two new Multiplayer maps, Directed Mode for Shattered Veil, and new updates to Verdansk. Get new Loadout items like the Vendetta Perk and the Ladra SMG and participate in new events and more when the mid-season update launches on May 1!"
    }
];

export default function LatestNews() {
    return (
        <section className="bg-black text-white px-6 py-12">
            <h2 className="text-3xl font-bold text-center my-8">LATEST NEWS & ARTICLES</h2>

            <div className="flex justify-center items-center flex-wrap gap-2 md:gap-1 lg:gap-16 border-b border-t border-white mb-10">
                <button className="md:bg-[rgba(7,104,175,0.5)] px-4 py-4 text-white font-bold cursor-pointer md:border-b-4 md:border-[#0768af]">ALL NEWS</button>

                <div className="hidden md:block px-4 py-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgba(7,104,175,0.5)] hover:border-b-4 hover:border-[#0768af]  border-transparent cursor-pointer ">
                    <img src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg" alt="Activision" className="h-6" />
                </div>
                <div className="hidden md:block px-4 py-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgba(7,104,175,0.5)] hover:border-b-4 hover:border-[#0768af]  border-transparent cursor-pointer ">
                    <img src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg" alt="Call of Duty" className="h-5" />
                </div>
                <div className="hidden md:block px-4 py-1 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgba(7,104,175,0.5)] hover:border-b-4 hover:border-[#0768af]  border-transparent cursor-pointer ">
                    <img src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/THPS3+4_Logo.svg" alt="Tony Hawk" className="h-12" />
                </div>
                <div className="hidden md:block px-4 py-1 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgba(7,104,175,0.5)] hover:border-b-4 hover:border-[#0768af]  border-transparent cursor-pointer ">
                    <img src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png" alt="Crash" className="h-12" />
                </div>

                <FaCaretDown className="md:hidden text-2xl cursor-pointer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-[#1a1a1a] rounded-lg overflow-hidden hover:shadow-lg group transition duration-300 ${index > 2 ? "hidden md:block" : ""
                            }`}
                    >
                        <div className="overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                            <h3 className="font-bold text-lg mb-4">{item.title}</h3>

                            <div className="h-[1px] w-full bg-white mb-4 transition-all duration-300 group-hover:bg-[#0768af]" />


                            <p className="text-sm text-gray-300 mb-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden transition-all duration-300">
                                {item.description}
                            </p>
                            <div className='flex'>
                                <button className="uppercase text-sm font-bold tracking-wide text-blue-400 cursor-pointer">
                                    Read More
                                </button>
                                <FaCaretRight className='ml-2 mt-1 text-blue-400 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className='flex justify-center'>
                    <button className="hidden md:block px-6 py-2 my-12 w-60 border border-white text-white rounded-full font-semibold hover:bg-[#064a7c] hover:border-3 hover:border-[#0768AF] cursor-pointer ">
                        VIEW ALL
                    </button>
                </div>
        </section>
    );
}
