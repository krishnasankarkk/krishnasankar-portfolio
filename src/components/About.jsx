function About() {
    return (
        <div className="mt-28 w-full flex flex-row items-center justify-evenly p-24">
          <div className="flex flex-col bg-theme-1-3 w-auto h-52 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom">
            <span className="w-96 font-extrabold text-2xl">Hi, I&apos;m <br />
            <b className="text-4xl">Krishnasankar</b><br />
            Crafting efficient, maintainable and scalable software solutions for over a year.<br />
            </span>
          </div>
          <img className="rounded-custom w-80 h-80 shadow-lg shadow-green" src="/profile.png" alt="Profile" />
          <div className="flex flex-col gap-6">
            <a className="flex flex-row items-center justify-center gap-2 w-5 h-5" href="https://linkedin.com/in/krishnasankar-k-k-a59455178/">
              <img src="/linkedin.png" alt="linkedin" />
              <span className="font-bold bg-theme-1-4 w-10 h-6 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3">LinkedIn</span></a>
            <a className="flex flex-row items-center justify-center gap-2 w-5 h-5" href="https://linkedin.com/in/krishnasankar-k-k-a59455178/">
              <img src="/github.png" alt="github" />
              <span className="font-bold bg-theme-1-4 w-10 h-6 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3">Github</span></a>
            <a className="flex flex-row items-center justify-center gap-2 w-5 h-5" href="https://www.instagram.com/artbykichu">
              <img src="/instagram.png" alt="instagram" />
              <span className="font-bold bg-theme-1-4 w-10 h-6 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3">Instagram</span></a>
          </div>
        </div>
    )
}
export default About