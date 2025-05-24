import React from 'react';

const cards = [
    {
        title: 'CALL OF DUTY: BLACK OPS 6',
        image: 'https://support.activision.com/content/dam/atvi/support/home/modules/tall/BO6-home-tile2.jpg',
    },
    {
        title: 'ACCOUNT & SECURITY',
        image: 'https://support.activision.com/content/dam/atvi/support/home/modules/tall/account-security-en-silver-tall-2x.jpg',
    },
    {
        title: 'CALL OF DUTY: WARZONE',
        image: 'https://support.activision.com/content/dam/atvi/support/home/modules/tall/WZV-home-tile.jpg',
    },
    {
        title: 'CALL OF DUTY: MOBILE',
        image: 'https://support.activision.com/content/dam/atvi/support/home/modules/tall/codmobile-module.jpg',
    },
    {
        title: "TONY HAWK'S PRO SKATER 3 + 4",
        image: 'https://support.activision.com/content/dam/atvi/support/home/modules/tall/THPS34-home-tile.png',
    },
    {
        title: 'CALL OF DUTY: MODERN WARFARE III',
        image: 'https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWIII-home-tile-1c.png',
    },
    {
        title: 'CALL OF DUTY: MODERN WARFARE II',
        image: 'https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg',
    },
    {
        title: "CALL OF DUTY: MODERN WARFARE",
        image: 'https://support.activision.com/content/dam/atvi/support/home/modules/tall/MW_module_001.jpg',
    },
    {
        title: 'CALL OF DUTY: BLACK OPS COLD WAR',
        image: 'https://support.activision.com/content/dam/atvi/support/home/modules/tall/cold-war-home-page-tile.jpg',
    },
];

export default function SupportCategories() {
    return (
        <section className="bg-[#2a2a2a] py-16">
            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer transition duration-300 w-[367px]"
                    >
                        <p className="mb-4 text-sm font-semibold tracking-widest text-[#8e8e8e] group-hover:text-white transition ">
                            {card.title}
                        </p>

                        <div className="overflow-hidden rounded">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full object-cover transform group-hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
