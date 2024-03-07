import { useState } from "react"
import { Link } from "react-scroll";

function Navbar() {
    const [isAboutHovered, setAboutHovered] = useState(false);
    const [isHomeHovered, setHomeHovered] = useState(false);
    const [isSkillsHovered, setSkillsHovered] = useState(false);
    const [isProjectsHovered, setProjectsHovered] = useState(false);
    const [isContactHovered, setContactHovered] = useState(false);

    return (
        <div className="bg-theme-1-4 text-theme-1-1 fixed z-50 top-0 left-0 flex flex-row gap-8 p-6 w-full xs:justify-center md:justify-between items-center font-bold text-xl">
            <Link to="home" className="relative text-2xl cursor-pointer" spy={true} smooth={true} offset={-150} duration={500}>Krishnasankar
            <div className="absolute -top-1 -left-2 -z-10  bg-theme-1-4 border-2 border-theme-1-3 w-full h-12 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%]"></div></Link>
            <div className="flex flex-row items-center justify-between gap-14">
                <Link to="home" className="relative cursor-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onMouseEnter={() => setHomeHovered(true)} onMouseLeave={() => setHomeHovered(false)}>Home
                    <span className={`absolute ${isHomeHovered ? 'block' : 'hidden'} bg-theme-1-3 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="about" className="relative cursor-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onMouseEnter={() => setAboutHovered(true)} onMouseLeave={() => setAboutHovered(false)}>About
                    <span className={`absolute ${isAboutHovered ? 'block' : 'hidden'} bg-theme-1-3 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="skills" className="relative cursor-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onMouseEnter={() => setSkillsHovered(true)} onMouseLeave={() => setSkillsHovered(false)}>Skills
                    <span className={`absolute ${isSkillsHovered ? 'block' : 'hidden'} bg-theme-1-3 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="projects" className="relative cursor-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onMouseEnter={() => setProjectsHovered(true)} onMouseLeave={() => setProjectsHovered(false)}>Projects
                    <span className={`absolute ${isProjectsHovered ? 'block' : 'hidden'} bg-theme-1-3 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="contact" className="relative cursor-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onMouseEnter={() => setContactHovered(true)} onMouseLeave={() => setContactHovered(false)}>Contact
                    <span className={`absolute ${isContactHovered ? 'block' : 'hidden'} bg-theme-1-3 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <a href="https://api.whatsapp.com/send?phone=917306310132" className="flex items-center p-4 text-md text-theme-1-1 cursor-pointer bg-theme-1-4 border-2 border-theme-1-3 hover:border-theme-1-1 hover:bg-theme-1-3 w-32 h-12 rounded-tl-[85%] rounded-tr-[68%] rounded-bl-[76%] rounded-br-[53%]">Let&apos;s chat</a>
            </div>
        </div>
    )
}
export default Navbar