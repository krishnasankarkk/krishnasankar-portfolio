function Projects() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center rounded-2xl relative gap-2">
          <span className="font-extrabold text-2xl underline mt-4">Portfolio</span>
          <div className="flex gap-4 items-start justify-center bg-theme-1-4 border-2 border-theme-1-3 w-auto h-auto rounded-2xl p-8 m-4">
            <img className="w-[40rem] h-auto rounded-2xl" src="/keralagram.png" alt="keralagram" />
            <span className="text-xl font-bold"><a href="https://github.com/krishnasankarkk/django-keralagram" className="flex flex-row items-center justify-center text-2xl underline">Keralagram
            <img src="/external-link.png" alt="link" /></a> <br />
            A social network application crafted using django. <br />
            Django is a full stack framework written in python.
            </span>
          </div>
          <div className="flex bg-theme-1-3 w-auto h-auto rounded-2xl p-8 m-4"></div>
          <div className="flex bg-theme-1-3 w-auto h-auto rounded-2xl p-8 m-4"></div>
          <div className="flex bg-theme-1-3 w-auto h-auto rounded-2xl p-8 m-4"></div>
        </div>
    )
}
export default Projects