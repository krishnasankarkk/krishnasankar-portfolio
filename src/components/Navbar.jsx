import { useState } from "react"
import { Link } from "react-scroll";

function Navbar() {
    const [isAboutHovered, setAboutHovered] = useState(false);
    const [isHomeHovered, setHomeHovered] = useState(false);
    const [isSkillsHovered, setSkillsHovered] = useState(false);
    const [isProjectsHovered, setProjectsHovered] = useState(false);
    const [isContactHovered, setContactHovered] = useState(false);

    const [isAboutClicked, setAboutClicked] = useState(false);
    const [isHomeClicked, setHomeClicked] = useState(false);
    const [isSkillsClicked, setSkillsClicked] = useState(false);
    const [isProjectsClicked, setProjectsClicked] = useState(false);
    const [isContactClicked, setContactClicked] = useState(false);

    const handleClick = () => {
        setHomeClicked(false);
        setAboutClicked(false);
        setSkillsClicked(false);
        setProjectsClicked(false);
        setContactClicked(false);
    };

    return (
        <div className="shadow-lg bg-theme-1-3 text-theme-1-1 fixed z-50 top-0 left-0 flex flex-row gap-8 p-6 w-full xs:justify-center md:justify-between items-center font-bold text-xl">
            <Link to="home" className="relative text-2xl cursor-pointer" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setHomeClicked(true) }}>Krishnasankar
            <div className="absolute -top-1 -left-2 -z-10  bg-theme-1-3 border-2 border-theme-1-1 w-full h-12 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%]"></div></Link>
            <div className="flex flex-row items-center justify-between gap-14">
                <Link to="home" className="relative cursor-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setHomeClicked(true) }}  onMouseEnter={() => setHomeHovered(true)} onMouseLeave={() => setHomeHovered(false)}>Home
                    <span className={`absolute ${isHomeHovered | isHomeClicked ? 'block' : 'hidden'} bg-theme-1-4 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="about" className="relative cursor-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setAboutClicked(true) }}  onMouseEnter={() => setAboutHovered(true)} onMouseLeave={() => setAboutHovered(false)}>About
                    <span className={`absolute ${isAboutHovered | isAboutClicked ? 'block' : 'hidden'} bg-theme-1-4 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="skills" className="relative cursor-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setSkillsClicked(true) }}  onMouseEnter={() => setSkillsHovered(true)} onMouseLeave={() => setSkillsHovered(false)}>Skills
                    <span className={`absolute ${isSkillsHovered | isSkillsClicked ? 'block' : 'hidden'} bg-theme-1-4 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="projects" className="relative cursor-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setProjectsClicked(true) }}  onMouseEnter={() => setProjectsHovered(true)} onMouseLeave={() => setProjectsHovered(false)}>Projects
                    <span className={`absolute ${isProjectsHovered | isProjectsClicked ? 'block' : 'hidden'} bg-theme-1-4 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="contact" className="relative cursor-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setContactClicked(true) }}  onMouseEnter={() => setContactHovered(true)} onMouseLeave={() => setContactHovered(false)}>Contact
                    <span className={`absolute ${isContactHovered | isContactClicked ? 'block' : 'hidden'} bg-theme-1-4 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <a href="https://api.whatsapp.com/send?phone=917306310132" className="flex items-center p-4 text-md text-theme-1-1 cursor-pointer bg-theme-1-3 hover:bg-theme-1-4 border-2 border-theme-1-1 hover:border-theme-1-1 w-32 h-12 rounded-tl-[85%] rounded-tr-[68%] rounded-bl-[76%] rounded-br-[53%]">Let&apos;s chat</a>
            </div>
        </div>
    )
}
export default Navbar