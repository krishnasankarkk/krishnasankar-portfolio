import { useState } from "react"

function Navbar() {
    const [isAboutHovered, setAboutHovered] = useState(false);
    const [isProjectsHovered, setProjectsHovered] = useState(false);
    const [isContactHovered, setContactHovered] = useState(false);

    return (
        <div className="bg-theme-1-1 text-theme-1-4 fixed top-0 left-0 flex flex-row gap-8 p-10 w-full justify-between items-center font-bold text-xl">
            <span className="relative text-2xl cursor-pointer">Krishnasankar
            <div className="absolute -top-1 -left-2 -z-10  bg-theme-1-2 w-full h-12 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%]"></div></span>
            <div className="flex flex-row items-center justify-between gap-14">
                <span className="relative cursor-pointer" onMouseEnter={() => setAboutHovered(true)} onMouseLeave={() => setAboutHovered(false)}>About
                    <span className={`absolute ${isAboutHovered ? 'block' : 'hidden'} bg-theme-1-2 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </span>
                <span className="relative cursor-pointer" onMouseEnter={() => setProjectsHovered(true)} onMouseLeave={() => setProjectsHovered(false)}>Projects
                    <span className={`absolute ${isProjectsHovered ? 'block' : 'hidden'} bg-theme-1-2 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </span>
                <span className="relative cursor-pointer" onMouseEnter={() => setContactHovered(true)} onMouseLeave={() => setContactHovered(false)}>Contact
                    <span className={`absolute ${isContactHovered ? 'block' : 'hidden'} bg-theme-1-2 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </span>
                <span className="flex items-center p-4 text-md text-theme-1-4 bg-theme-1-2 rounded-full cursor-pointer">Let&apos;s chat</span>
            </div>
        </div>
    )
}
export default Navbar