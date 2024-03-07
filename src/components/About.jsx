function About() {
    return (
        <div className="mt-52 w-full flex flex-col md:flex-row items-center justify-evenly p-4 gap-4" id="about">
          <div className="flex flex-col bg-theme-1-3 xs:w-96 md:w-[40rem] h-52 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom">
            <span className="w-full font-extrabold xs:text-xl md:text-3xl">Hi, It&apos;s me <br />
            <b className="md:text-5xl xs:text-3xl">Krishnasankar</b><br />
            A passionate Python developer with a knack for solving complex problems and creating efficient solutions.<br />
            </span>
            <a href="https://api.whatsapp.com/send?phone=917306310132" className="flex flex-row gap-1 w-60 h-auto items-center justify-center mt-24 bg-theme-1-4 border-4 border-theme-1-3 hover:border-theme-1-1 hover:bg-theme-1-3 p-4 rounded-tl-[45%] rounded-tr-[58%] rounded-bl-[46%] rounded-br-[43%] cursor-pointer xs:hidden">
              <img src="/whatsapp.png" alt="whatsapp" />
              <span className="font-bold text-2xl">Chat with me</span>
            </a>
          </div>
          <img className="rounded-custom w-80 h-80 shadow-lg shadow-green" src="/profile.png" alt="Profile" />
          <div className="flex flex-col gap-6 text-2xl">
            <a className="flex flex-row items-center justify-center gap-2 w-auto h-auto" href="https://linkedin.com/in/krishnasankar-k-k-a59455178/">
              <img src="/linkedin.png" alt="linkedin" />
              <span className="font-bold bg-theme-1-4 w-10 h-6 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3">LinkedIn</span></a>
            <a className="flex flex-row items-center justify-center gap-2 w-auto h-auto" href="https://linkedin.com/in/krishnasankar-k-k-a59455178/">
              <img src="/github.png" alt="github" />
              <span className="font-bold bg-theme-1-4 w-10 h-6 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3">Github</span></a>
            <a className="flex flex-row items-center justify-center gap-2 w-auto h-auto" href="https://www.instagram.com/artbykichu">
              <img src="/instagram.png" alt="instagram" />
              <span className="font-bold bg-theme-1-4 w-10 h-6 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3">Instagram</span></a>
          </div>
        </div>
    )
}
export default About