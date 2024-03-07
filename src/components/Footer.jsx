function Footer() {
    return (
        <div className="mt-28 w-full h-24 flex flex-col items-center justify-evenly p-4 gap-4 mb-8" id="footer">
          {/* <img src="/copyright.png" alt="copright" /> */}
          <span className="font-bold text-3xl">Krishnasankar</span>
          <div className="flex flex-row gap-8">
              <a className="flex items-center justify-center bg-theme-1-4 hover:border-theme-1-1 hover:bg-theme-1-3 w-16 h-16 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3" href="https://linkedin.com/in/krishnasankar-k-k-a59455178/">
                <img className="w-8 h-8" src="/linkedin.png" alt="linkedin" />
              </a>
              <a className="flex items-center justify-center bg-theme-1-4 hover:border-theme-1-1 hover:bg-theme-1-3 w-16 h-16 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3" href="https://github.com/krishnasankarkk">
                <img className="w-8 h-8" src="/github.png" alt="github" />
              </a>
              <a className="flex items-center justify-center bg-theme-1-4 hover:border-theme-1-1 hover:bg-theme-1-3 w-16 h-16 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom cursor-pointer border-2 border-theme-1-3" href="https://www.instagram.com/artbykichu">
                <img className="w-8 h-8" src="/instagram.png" alt="instagram" />
              </a>
          </div>
        </div>
    )
}
export default Footer