import React from 'react';

const games = [
    {
        title: 'CALL OF DUTY BLACK OPS 6',
        rating: 'MATURE 17+',
        image: 'https://www.activision.com/content/dam/atvi/support/contact-us/BO6-FOB.jpg',
    },
    {
        title: 'CALL OF DUTY®: WARZONE',
        rating: 'MATURE 17+',
        image: 'https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/warzone/common/wz-boxart.jpg',
    },
    {
        title: 'CALL OF DUTY MODERN WARFARE III',
        rating: 'MATURE 17+',
        image: 'https://www.activision.com/content/dam/atvi/activision/games/call-of-duty/call-of-duty-modern-warfare-iii/mwiii-boxart.jpg',
    },
    {
        title: 'CRASH TEAM RUMBLE',
        rating: 'EVERYONE 10+',
        image: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/crash-bandicoot/crash-team-rumble/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg',
    },
    {
        title: 'TONY HAWK’S™ PRO SKATER™ 1 + 2',
        rating: 'TEEN',
        image: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-boxart.png',
    },
    {
        title: 'CALL OF DUTY®: MOBILE',
        rating: 'MATURE 17+',
        image: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/mobile/codm-boxart.jpg',
    },
    {
        title: 'SEKIRO®: SHADOWS DIE TWICE',
        rating: 'MATURE 17+',
        image: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-boxart.jpg',
    },
    {
        title: 'SPYRO® REIGNITED TRILOGY',
        rating: 'EVERYONE 10+',
        image: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/spyro/reignited-trilogy/spyro-boxart.png',
    },
];

export default function GameGallery() {
    return (
        <section className="bg-black text-white px-6 sm:px-12 lg:px-20 py-16">
            <h2 className="text-3xl text-center font-bold mb-4">OUR GAMES</h2>
            <div className="w-full h-[1px] bg-gray-500 mb-6" />
            <div className="flex flex-wrap justify-center gap-6">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="w-[45%] sm:w-[30%] lg:w-[20%] group"
                    >
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-[300px] transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="mt-3 font-bold text-xs sm:text-sm">{game.title}</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">{game.rating}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
