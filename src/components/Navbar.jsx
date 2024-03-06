import { useState } from "react"

function Navbar() {
    const [isAboutHovered, setAboutHovered] = useState(false);
    const [isProjectsHovered, setProjectsHovered] = useState(false);
    const [isContactHovered, setContactHovered] = useState(false);

    return (
        <div className="bg-theme-1-4 text-theme-1-1 fixed z-50 top-0 left-0 flex flex-row gap-8 p-6 w-full sm:justify-center md:justify-between items-center font-bold text-xl">
            <span className="relative text-2xl cursor-pointer">Krishnasankar
            <div className="absolute -top-1 -left-2 -z-10  bg-theme-1-4 border-2 border-theme-1-3 w-full h-12 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%]"></div></span>
            <div className="flex flex-row items-center justify-between gap-14">
                <span className="relative cursor-pointer hidden md:block" onMouseEnter={() => setAboutHovered(true)} onMouseLeave={() => setAboutHovered(false)}>About
                    <span className={`absolute ${isAboutHovered ? 'block' : 'hidden'} bg-theme-1-3 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </span>
                <span className="relative cursor-pointer hidden md:block" onMouseEnter={() => setProjectsHovered(true)} onMouseLeave={() => setProjectsHovered(false)}>Projects
                    <span className={`absolute ${isProjectsHovered ? 'block' : 'hidden'} bg-theme-1-3 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </span>
                <span className="relative cursor-pointer hidden md:block" onMouseEnter={() => setContactHovered(true)} onMouseLeave={() => setContactHovered(false)}>Contact
                    <span className={`absolute ${isContactHovered ? 'block' : 'hidden'} bg-theme-1-3 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </span>
                <span className="relative flex items-center p-4 text-md text-theme-1-1 cursor-pointer">Let&apos;s chat
                <span className="absolute top-1 left-0 -z-10  bg-theme-1-3 w-24 h-12 rounded-tl-[85%] rounded-tr-[68%] rounded-bl-[76%] rounded-br-[53%]"></span></span>
            </div>
        </div>
    )
}
export default Navbar