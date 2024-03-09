function About() {
    return (
        <div className="mt-52 w-full flex flex-col md:flex-row items-center justify-evenly p-4 gap-14" id="about">
          <div className="flex flex-col bg-theme-1-3 w-72 xs:w-96 sm:w-[40rem] h-52 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom">
            <span className="w-full font-extrabold text-xl md:text-2xl lg:text-3xl">Hi, It&apos;s me <br />
            <b className="text-2xl md:text-4xl lg:text-5xl">Krishnasankar</b><br />
            A passionate web developer with a knack for solving complex problems and creating efficient solutions.<br />
            </span>
            <a href="https://api.whatsapp.com/send?phone=917306310132" className="hidden md:flex flex-row gap-1 w-60 h-auto items-center justify-center mt-24 bg-theme-1-4 border-2 border-theme-1-3 hover:border-theme-1-1 hover:bg-theme-1-3 p-4 rounded-tl-[45%] rounded-tr-[58%] rounded-bl-[46%] rounded-br-[43%] cursor-pointer">
              <img src="/whatsapp.png" alt="whatsapp" />
              <span className="font-bold text-2xl">Chat with me</span>
            </a>
          </div>
          <img className="rounded-custom w-52 h-52 xs:w-64 xs:h-64 shadow-lg shadow-green" src="/profile.png" alt="Profile" />
          <div className="flex flex-col items-center justify-center gap-6 text-2xl">
            <a className="flex flex-row items-center justify-center gap-2 w-auto h-auto" href="https://linkedin.com/in/krishnasankar-k-k-a59455178/">
              <img className="w-auto h-auto md:w-10 md:h-10" src="/linkedin.png" alt="linkedin" />
              <span className="block md:hidden lg:hidden xl:block font-bold bg-theme-1-4 w-10 h-6 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3">LinkedIn</span></a>
            <a className="flex flex-row items-center justify-center gap-2 w-auto h-auto" href="https://linkedin.com/in/krishnasankar-k-k-a59455178/">
              <img className="w-auto h-auto md:w-10 md:h-10" src="/github.png" alt="github" />
              <span className="block md:hidden lg:hidden xl:block font-bold bg-theme-1-4 w-10 h-6 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3">Github</span></a>
            <a className="flex flex-row items-center justify-center gap-2 w-auto h-auto" href="https://www.instagram.com/artbykichu">
              <img className="w-auto h-auto md:w-10 md:h-10" src="/instagram.png" alt="instagram" />
              <span className="block md:hidden lg:hidden xl:block font-bold bg-theme-1-4 w-10 h-6 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3">Instagram</span></a>
          </div>
        </div>
    )
}
export default About