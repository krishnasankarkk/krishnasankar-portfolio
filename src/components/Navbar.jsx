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

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
        let sections = document.querySelectorAll('section');
        let scrollPosition = window.scrollY;
        handleClick();
        if (scrollPosition==0) {
            setAboutClicked(true);
        }
        sections.forEach(section => {
            let top = section.offsetTop-200;
            let height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                let sectionId = section.getAttribute('id');
                let menuItem = document.querySelector(`.${sectionId}`);
                menuItem?menuItem.classList.remove('hidden'):'';
            } else {
                let sectionId = section.getAttribute('id');
                let menuItem = document.querySelector(`.${sectionId}`);
                menuItem?menuItem.classList.add('hidden'):'';
            }
        });
    }
    return (
        <div className="shadow-lg bg-theme-1-3 text-theme-1-1 fixed z-50 top-0 left-0 flex flex-row gap-8 p-6 w-full justify-between items-center font-bold text-xl">
            <Link to="home" className="hidden sm:block relative text-2xl custom-pointer" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setHomeClicked(true) }}>Krishnasankar
            <div className="absolute -top-1 -left-2 -z-10  bg-theme-1-3 border-2 border-theme-1-1 w-full h-12 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%]"></div></Link>
            <Link to="home" className="sm:hidden relative text-2xl custom-pointer" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setHomeClicked(true) }}>Krishna
            <div className="absolute -top-1 -left-2 -z-10  bg-theme-1-3 border-2 border-theme-1-1 w-20 h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%]"></div></Link>
            <div className="flex flex-row items-center justify-between gap-14">
                <Link to="home" className="relative custom-pointer hidden lg:block" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setHomeClicked(true) }}  onMouseEnter={() => setHomeHovered(true)} onMouseLeave={() => setHomeHovered(false)}>Home
                    <span className={`absolute ${isHomeHovered | isHomeClicked ? 'block' : 'hidden'} home bg-theme-1-4 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="about" className="relative custom-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setAboutClicked(true) }}  onMouseEnter={() => setAboutHovered(true)} onMouseLeave={() => setAboutHovered(false)}>About
                    <span className={`absolute ${isAboutHovered | isAboutClicked ? 'block' : 'hidden'} about bg-theme-1-4 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="skills" className="relative custom-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setSkillsClicked(true) }}  onMouseEnter={() => setSkillsHovered(true)} onMouseLeave={() => setSkillsHovered(false)}>Skills
                    <span className={`absolute ${isSkillsHovered | isSkillsClicked ? 'block' : 'hidden'} skills bg-theme-1-4 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="projects" className="relative custom-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setProjectsClicked(true) }}  onMouseEnter={() => setProjectsHovered(true)} onMouseLeave={() => setProjectsHovered(false)}>Projects
                    <span className={`absolute ${isProjectsHovered | isProjectsClicked ? 'block' : 'hidden'} projects bg-theme-1-4 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <Link to="contact" className="relative custom-pointer hidden md:block" spy={true} smooth={true} offset={-150} duration={500} onClick={() => { handleClick(); setContactClicked(true) }}  onMouseEnter={() => setContactHovered(true)} onMouseLeave={() => setContactHovered(false)}>Contact
                    <span className={`absolute ${isContactHovered | isContactClicked ? 'block' : 'hidden'} contact bg-theme-1-4 -z-10 -top-2 -left-2 w-full h-10 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom`}></span>
                </Link>
                <a href="https://api.whatsapp.com/send?phone=917306310132" className="flex items-center p-4 text-md text-theme-1-1 custom-pointer relative">
                <div className="absolute left-1 -z-50 bg-theme-1-3 hover:bg-theme-1-4 border-2 border-theme-1-1 hover:border-theme-1-1 w-28 justify-center h-12 rounded-tl-[85%] rounded-tr-[68%] rounded-bl-[76%] rounded-br-[53%]"></div>
                Let&apos;s chat</a>
            </div>
            <div className="w-0 h-1 bg-theme-1-2 absolute -bottom-0 left-0" id="progressBar"></div>
        </div>
    )
}
export default Navbar