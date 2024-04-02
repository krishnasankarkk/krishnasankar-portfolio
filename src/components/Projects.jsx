// import ImageCarousel from "./ImageCarousel"

function Projects() {
// const images = [
//   "/keralagram.png",
//   "/keralagram.png",
//   "/keralagram.png",
//   "/keralagram.png",
// ];

    return (
        <section className="w-full h-auto flex flex-col items-center justify-center rounded-2xl relative gap-2" id="projects">
          <span className="font-extrabold text-2xl underline mt-4">Projects</span>
          <a href="https://github.com/krishnasankarkk/django-keralagram" className="flex flex-col lg:flex-row gap-4 xs:items-center md:items-start justify-center bg-theme-1-4 border-2 border-theme-1-3 w-[80%] h-auto rounded-2xl p-8 m-4 hover:bg-theme-1-3 hover:border-theme-1-1 custom-pointer">
            <img className="w-[40rem] h-auto rounded-2xl" src="/keralagram.png" alt="keralagram" />
            <div className="flex flex-col items-start justify-start gap-4">
              <span className="text-xl font-bold"><span className="flex flex-row gap-1 items-start justify-start text-2xl underline">Keralagram
                <img src="/external-link.png" alt="link" /></span> <br />
                A social network application crafted using django. <br />
                Django is a full stack framework written in python.
              </span>
              <div className="flex flex-row items-start gap-2 flex-wrap">
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Django</span>
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Tailwindcss</span>
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Django-Channels</span>
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Cloudinary</span>
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Postgre-SQL</span>
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Vercel</span>
              </div>
            </div>
          </a>
          <a href="https://github.com/krishnasankarkk/kwikmart" className="flex flex-col lg:flex-row gap-4 xs:items-center md:items-start justify-center bg-theme-1-4 border-2 border-theme-1-3 w-[80%] h-auto rounded-2xl p-8 m-4 hover:bg-theme-1-3 hover:border-theme-1-1 custom-pointer">
            <img className="w-[40rem] h-auto rounded-2xl" src="/kwikmart.png" alt="kwikmart" />
            <div className="flex flex-col items-start justify-start gap-4">
              <span className="text-xl font-bold"><span className="flex flex-row gap-1 items-center justify-center text-2xl underline">Kwikmart
                <img src="/external-link.png" alt="link" /></span> <br />
                An online shopping application crafted using django. <br />
              </span>
              <div className="flex flex-row items-start gap-2 flex-wrap">
              <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Django</span>
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Tailwindcss</span>
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Cloudinary</span>
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Postgre-SQL</span>
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Vercel</span>
              </div>
            </div>
          </a>
          <a href="https://github.com/krishnasankarkk/pygame-alien-invasion" className="flex flex-col lg:flex-row gap-4 xs:items-center md:items-start justify-center bg-theme-1-4 border-2 border-theme-1-3 w-[80%] h-auto rounded-2xl p-8 m-4 hover:bg-theme-1-3 hover:border-theme-1-1 custom-pointer">
            <img className="w-[40rem] h-auto rounded-2xl" src="/aliens.png" alt="Aliens" />
            <div className="flex flex-col items-start justify-start gap-4">
              <span className="text-xl font-bold"><span className="flex flex-row gap-1 items-center justify-center text-2xl underline">Alien Invasion
                <img src="/external-link.png" alt="link" /></span> <br />
                A 2D game crafted using Python&apos;s pygame library.
              </span>
              <div className="flex flex-row items-start gap-2 flex-wrap">
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Python</span>
                <span className="font-medium text-sm border-2 border-theme-1-2 text-theme-1-1 p-2 rounded-full">Pygame</span>
              </div>
            </div>
          </a>
          <div  className="flex flex-col lg:flex-row gap-4 xs:items-center md:items-start justify-center bg-theme-1-4 border-2 border-theme-1-3 w-[80%] h-auto rounded-2xl p-8 m-4 hover:bg-theme-1-3 hover:border-theme-1-1 custom-pointer">
            <span className="text-xl font-bold">More projects to coming soon...</span>
          </div>
        </section>
    )
}
export default Projects