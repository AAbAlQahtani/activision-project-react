import React from 'react';
import { FaCircle } from "react-icons/fa6";


export default function SupportHero() {
    const data = {
        background: 'https://support.activision.com/content/dam/atvi/support/home/carousel/hero/BO6_S3R_hero.jpg',
        logo: 'https://support.activision.com/content/dam/atvi/support/home/carousel/hero/BO6-S3R-logo-lockup.png',
        title: 'CALL OF DUTY: BLACK OPS 6 WARZONE',
        subtitle: 'S03 RELOADED',
        button1: "CHECK OUT WHAT'S NEW IN SEASON 03 RELOADED",
        button2: 'BROWSE THE SUPPORT PAGE',
    };

    return (
        <section className="relative w-full h-[550px] overflow-hidden">
            <img
                src={data.background}
                alt=""
                className="w-full h-full object-cover absolute inset-0"
            />

            <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-10 text-white">
                <img src={data.logo} alt="Logo" className="mb-4" />
                <h2 className="text-4xl font-bold mb-2">{data.title}</h2>
                <h3 className="text-2xl font-light mb-6">{data.subtitle}</h3>
                <div className="space-y-3">
                    <button className="flex items-center gap-3  px-6 py-2 rounded text-sm transition transform hover:scale-105 cursor-pointer">
                        <img src="https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_game.png" alt="" />
                        {data.button1}
                    </button>
                    <button className="flex items-center gap-3  px-6 py-2 rounded text-sm transition transform hover:scale-105 cursor-pointer">
                        <img src="https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_game.png" alt="" />
                        {data.button2}
                    </button>
                </div>
            </div>

            <div className="absolute bottom-5 w-full z-30 flex justify-center space-x-3">
                <FaCircle className='w-3 h-3 text-white cursor-pointer' />
                <FaCircle className='w-3 h-3 text-white opacity-40 cursor-pointer' />
                <FaCircle className='w-3 h-3 text-white opacity-40 cursor-pointer' />
                <FaCircle className='w-3 h-3 text-white opacity-40 cursor-pointer' />
                <FaCircle className='w-3 h-3 text-white opacity-40 cursor-pointer' />
            </div>
        </section>
    );
}
