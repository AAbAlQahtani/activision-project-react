import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const jobs = [
    {
        title: "Senior Gameplay Engineer - High Moon Studios",
        category: "Programming/Software Engineering",
        id: "R024108",
        description: "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game...",
    },
    {
        title: "Lead Analytics Engineer",
        category: "Data Analytics",
        id: "R024154",
        description: "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...",
    },
    {
        title: "Expert Animation Engineer - Infinity Ward",
        category: "Animation/Technical",
        id: "R023988",
        description: "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th..."
    },
    {
        title: "Senior AI Animator - Infinity Ward",
        category: "Animation/AI",
        id: "R024013",
        description: "Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio..."
    },
    {
        title: "Level Designer",
        category: "Game/Level Design",
        id: "R025221",
        description: "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to..."
    },
];

export default function JobsList() {
    return (
        <section className="bg-black text-white px-4 sm:px-6 lg:px-40 py-16">
            <h2 className="text-2xl font-bold mb-10">Be the First to Apply</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="bg-white text-black rounded-lg p-6 relative flex flex-col justify-between lg:min-h-[280px]"
                    >
                        <div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-xl hover:text-[#0768AF] cursor-pointer">{job.title}</h3>
                                <FaRegHeart className="text-xl text-black/70  cursor-pointer" />
                            </div>
                            <p className="text-sm text-black mt-1 mb-2">
                                {job.category} <span className="ml-4">{job.id}</span>
                            </p>
                            <p className=" text-black">{job.description}</p>
                        </div>

                        <button className="mt-6 w-fit bg-black text-white font-semibold px-8 py-3  hover:bg-[#3E8909] transition cursor-pointer">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
