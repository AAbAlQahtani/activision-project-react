import React from 'react'
const teamMembers = [
    {
        name: "Rob Kostich",
        title: "President",
        img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/rob-kostich.jpg",
    },
    {
        name: "Josh Taub",
        title: "Chief Operating Officer",
        img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/josh-taub.jpg",
    },
    {
        name: "Suzie Carr",
        title: "Chief People Officer",
        img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/suzie-carr.jpg",
    },
    {
        name: 'Terri Durham',
        title: 'SVP & General Counsel',
        img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/terri-durham.jpg',
    },
    {
        name: 'David Stohl',
        title: 'Head of Development, Call of Duty',
        img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/dave-stohl.jpg',
    },
    {
        name: 'Pat Kelly',
        title: 'Head of Creative, Call of Duty',
        img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg',
    },
    {
        name: 'Tyler Bahl',
        title: 'SVP, Head of Marketing',
        img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/tyler-bahl.jpg',
    },
    {
        name: 'Natasha Tatarchuk',
        title: 'SVP, Chief Technology Officer',
        img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/natasha.jpg',
    },
    {
        name: 'Matt Cox',
        title: 'GM, Call of Duty',
        img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/matt-cox.jpg',
    }
];

export default function LeadershipTeam() {
    return (
        <section className="bg-black text-white pb-16 px-6 text-center">
            <h2 className="text-3xl text-center font-bold mb-4">OUR LEADERSHIP TEAM</h2>
            <div className="w-full h-[1px] bg-gray-500 mb-6" />

            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-72 h-72 rounded-full object-cover mb-4 "
                        />
                        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                        <p className="text-sm text-gray-300">{member.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
