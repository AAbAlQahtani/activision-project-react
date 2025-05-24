import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoChevronDown } from "react-icons/io5";


const pages = [
    { title: "HOME", path: "/" },
    { title: "ABOUT", path: "/about" },
    { title: "CAREERS", path: "/careers" },
    { title: "SUPPORT", path: "/support" },
];

export default function Nav() {
    return (
        <div>
            <nav className="sticky top-0 z-50 flex justify-start gap-[38%] items-center text-[#b3b6b7] bg-black bg-opacity-80 px-6 py-4 border-b ">
                 <AiOutlineMenu className='lg:hidden font-bold text-4xl text-white' />
                <div className='flex gap-16  lg:justify-around items-center'>
                   
                    <img
                        className="h-12 cursor-pointer"
                        src="https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691550348681_v-1673519590327-header_logo.png"
                        alt="logo"
                    />

                    <ul className="hidden lg:flex gap-8 text-base font-medium">
                        {pages.map((item) => (
                            <Link to={item.path} key={item.title}>
                                <li className="flex items-center hover:text-white">
                                    {item.title}
                                    <IoChevronDown className="ml-2 mt-1 text-white text-lg cursor-pointer"/>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:flex items-center gap-4 text-base font-medium ">
                    <button className="text-white border-2 px-4 py-[2px] pb-[3px] rounded-[24px] mx-auto  text-center transition-colors
                     duration-300 font-bold  border-[#0768af] bg-[rgba(7,104,175,0.5)] hover:bg-[#064a7c] 
                     hover:border-3 hover:border-[#0768AF] cursor-pointer" >
                        SIGN UP
                    </button>
                    <button className=" text-[#b3b6b7] hover:text-white cursor-pointer">LOGIN</button>
                </div>

                

            </nav>
        </div>
    );
}