import React from 'react'

export default function MissionFutureValue() {
    return (
        <section className="bg-black text-white px-6 py-28 text-center">
            <div className="max-w-6xl mx-auto mb-24">
                <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
                <div className="w-full h-[1px] bg-gray-500 mb-6" />
                <p className="text-sm font-semibold">
                    At Activision, we strive to create the most iconic brands in gaming and entertainment.
                    We’re driven by our mission to deliver unrivaled gaming experiences for the world to enjoy, together.
                    Home to iconic franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™ Pro Skater™,
                    we’re a global leader in interactive entertainment.
                    Our goal? Delight millions with innovative, fun, and engaging games.
                    With a legacy of success, we're pushing boundaries with cutting-edge technology and inclusive practices.
                    Join us in delivering unforgettable entertainment and seize the chance to level up your career.
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">ACTIVATE YOUR FUTURE</h2>
                <div className="w-full h-[1px] bg-gray-500 mb-6" />
                <div className="space-y-4 text-sm font-semibold">
                    <p>We unite our global player community with epic entertainment, focusing on three core pillars:</p>
                    <p>People – fostering talent and learning opportunities.</p>
                    <p>Innovation – consistently pushing to iterate and evolve.</p>
                    <p>Excellence – delivering high-quality games, consistently year in and year out.</p>
                </div>
                <p className="mt-6 text-sm font-semibold">
                    Join us at Activision, where inclusivity thrives, and together we shape the future of entertainment for our players.
                    Explore open roles now!
                </p>
            </div>

            <div className="max-w-6xl mx-auto my-18">
                <h2 className="text-3xl font-bold mb-4">OUR VALUES</h2>
                <div className="w-full h-[1px] bg-gray-500 mb-6" />

                <img
                    src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/values/atvi-values.png"
                    alt="" />
                <button className="px-6 py-2 w-60 rounded-full font-semibold text-white border-2 mx-auto  text-center transition-colors duration-300  border-[#0768af] bg-[rgba(7,104,175,0.5)] hover:bg-[#064a7c] hover:border-3 hover:border-[#0768AF] cursor-pointer">
                    LEARN MORE
                </button>
            </div>
        </section>
    )
}