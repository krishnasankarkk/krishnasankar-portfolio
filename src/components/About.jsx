function About() {
    return (
        <div className=" mt-28 w-full flex flex-row items-center justify-evenly p-10 gap-24">
          <div className="flex flex-col bg-theme-1-4 w-auto h-52 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom">
            <span className="w-96 font-extrabold text-2xl">Hi, I&apos;m <br />
            <b className="text-4xl">Krishnasankar</b><br />
            Crafting efficient, maintainable and scalable software solutions for over a year.<br />
            </span>
          </div>
        <img className="rounded-custom w-80 h-80 shadow-lg shadow-green" src="/src/assets/profile.png" alt="Profile" />
      </div>
    )
}
export default About