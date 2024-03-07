// import ImageCarousel from "./ImageCarousel"

function Projects() {
// const images = [
//   "/keralagram.png",
//   "/keralagram.png",
//   "/keralagram.png",
//   "/keralagram.png",
// ];

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center rounded-2xl relative gap-2 mt-24" id="projects">
          <span className="font-extrabold text-2xl underline mt-4">Portfolio</span>
          <a href="https://github.com/krishnasankarkk/django-keralagram" className="flex xs:flex-col md:flex-row gap-4 xs:items-center md:items-start justify-center bg-theme-1-4 border-2 border-theme-1-3 w-auto h-auto rounded-2xl p-8 m-4 hover:bg-theme-1-3 hover:border-theme-1-1 cursor-pointer">
            <img className="w-[40rem] h-auto rounded-2xl" src="/keralagram.png" alt="keralagram" />
            <span className="text-xl font-bold"><span className="flex flex-row gap-1 items-center justify-center text-2xl underline">Keralagram
              <img src="/external-link.png" alt="link" /></span> <br />
              A social network application crafted using django. <br />
              Django is a full stack framework written in python.
            </span>
          </a>
          <a href="https://github.com/krishnasankarkk/kwikmart" className="flex xs:flex-col md:flex-row gap-4 xs:items-center md:items-start justify-center bg-theme-1-4 border-2 border-theme-1-3 w-auto h-auto rounded-2xl p-8 m-4 hover:bg-theme-1-3 hover:border-theme-1-1 cursor-pointer">
            <img className="w-[40rem] h-auto rounded-2xl" src="/kwikmart.png" alt="kwikmart" />
            <span className="text-xl font-bold"><span className="flex flex-row gap-1 items-center justify-center text-2xl underline">Kwikmart
              <img src="/external-link.png" alt="link" /></span> <br />
              An online shopping application crafted using django. <br />
            </span>
          </a>
          <a href="https://github.com/krishnasankarkk/pygame-alien-invasion" className="flex xs:flex-col md:flex-row gap-4 xs:items-center md:items-start justify-center bg-theme-1-4 border-2 border-theme-1-3 w-auto h-auto rounded-2xl p-8 m-4 hover:bg-theme-1-3 hover:border-theme-1-1 cursor-pointer">
            <img className="w-[40rem] h-auto rounded-2xl" src="/aliens.png" alt="Aliens" />
            <span className="text-xl font-bold"><span className="flex flex-row gap-1 items-center justify-center text-2xl underline">Alien Invasion
              <img src="/external-link.png" alt="link" /></span> <br />
              A 2D game crafted using Python&apos;s pygame library.
            </span>
          </a>
        </div>
    )
}
export default Projects