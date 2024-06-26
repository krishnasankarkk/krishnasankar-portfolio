function Skills() {
    return (
        <section className="w-full h-auto flex flex-col items-center justify-center rounded-2xl relative gap-2" id="skills">
          <span className="font-extrabold text-2xl underline ml-2">Skills</span>
          <div className="p-4 w-auto flex flex-row gap-4 flex-wrap items-end justify-center mt-4">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="hover:border-theme-1-1 hover:bg-theme-1-3 rounded-custom border-2 border-theme-1-3 p-8 w-[10rem] h-auto flex flex-col items-center justify-center custom-pointer">
              <img src="/html.png" alt="html" />
              <span className="font-bold">Html 5</span>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="hover:border-theme-1-1 hover:bg-theme-1-3 rounded-custom border-2 border-theme-1-3 p-8 w-[10rem] h-auto flex flex-col items-center justify-center custom-pointer">
              <img src="/css-3.png" alt="css" />
              <span className="font-bold">Css 3</span>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="hover:border-theme-1-1 hover:bg-theme-1-3 rounded-custom border-2 border-theme-1-3 p-8 w-[10rem] h-auto flex flex-col items-center justify-center custom-pointer">
              <img src="/js.png" alt="JavaScript" />
              <span className="font-bold">JavaScript</span>
            </a>
            <a href="https://react.dev" className="hover:border-theme-1-1 hover:bg-theme-1-3 rounded-custom border-2 border-theme-1-3 p-8 w-[10rem] h-auto flex flex-col items-center justify-center custom-pointer">
              <img src="/react.png" alt="ReactJs" />
              <span className="font-bold">ReactJs</span>
            </a>
            <a href="https://tailwindcss.com" className="hover:border-theme-1-1 hover:bg-theme-1-3 rounded-custom border-2 border-theme-1-3 p-8 w-[10rem] h-auto flex flex-col items-center justify-center custom-pointer">
              <img className="w-auto h-auto" src="/tailwind.png" alt="Tailwind" />
              <span className="font-bold">Tailwind Css</span>
            </a>
            <a href="https://www.python.org" className="hover:border-theme-1-1 hover:bg-theme-1-3 rounded-custom border-2 border-theme-1-3 p-8 w-[10rem] h-auto flex flex-col items-center justify-center custom-pointer">
              <img src="/python.png" alt="Python" />
              <span className="font-bold">Python</span>
            </a>
            <a href="https://www.djangoproject.com" className="hover:border-theme-1-1 hover:bg-theme-1-3 rounded-custom border-2 border-theme-1-3 p-8 w-[10rem] h-auto flex flex-col items-center justify-center custom-pointer">
              <img className="w-auto h-auto" src="/django.png" alt="Django" />
              <span className="font-bold">Django</span>
            </a>
            <a href="https://www.mysql.com" className="hover:border-theme-1-1 hover:bg-theme-1-3 rounded-custom border-2 border-theme-1-3 p-8 w-[10rem] h-auto flex flex-col items-center justify-center custom-pointer">
              <img className="w-auto h-auto" src="/mysql.png" alt="Mysql" />
              <span className="font-bold">MySql</span>
            </a>
            <a href="https://www.postgresql.org" className="hover:border-theme-1-1 hover:bg-theme-1-3 rounded-custom border-2 border-theme-1-3 p-8 w-[10rem] h-auto flex flex-col items-center justify-center custom-pointer">
              <img className="w-auto h-auto" src="/postgre.png" alt="Postgresql" />
              <span className="font-bold">PostgreSql</span>
            </a>
            <a href="https://git-scm.com" className="hover:border-theme-1-1 hover:bg-theme-1-3 rounded-custom border-2 border-theme-1-3 p-8 w-[10rem] h-auto flex flex-col items-center justify-center custom-pointer">
              <img className="w-auto h-auto" src="/git.png" alt="Git" />
              <span className="font-bold">Git</span>
            </a>
          </div>
        </section>
    )
}
export default Skills