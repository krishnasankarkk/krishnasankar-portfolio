function Footer() {

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
    return (
        <section className="mt-28 pb-4 w-full h-full flex flex-col items-center justify-evenly gap-4 bg-theme-1-3" id="footer">
          <div className="flex items-center justify-center font-bold w-full h-10 bg-[#4db4ad] custom-pointer hover:bg-[#85ebe4]" onClick={scrollToTop}>Back To Top</div>
          <div className="flex flex-row gap-8">
              <a className="flex items-center justify-center bg-theme-1-4 hover:border-theme-1-1 hover:bg-theme-1-3 w-16 h-16 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom custom-pointer border-2 border-theme-1-3" href="https://linkedin.com/in/krishnasankarkk/">
                <img className="w-8 h-8" src="/linkedin.png" alt="linkedin" />
              </a>
              <a className="flex items-center justify-center bg-theme-1-4 hover:border-theme-1-1 hover:bg-theme-1-3 w-16 h-16 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom custom-pointer border-2 border-theme-1-3" href="https://github.com/krishnasankarkk">
                <img className="w-8 h-8" src="/github.png" alt="github" />
              </a>
              <a className="flex items-center justify-center bg-theme-1-4 hover:border-theme-1-1 hover:bg-theme-1-3 w-16 h-16 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom custom-pointer border-2 border-theme-1-3" href="https://www.instagram.com/artbykichu">
                <img className="w-8 h-8" src="/instagram.png" alt="instagram" />
              </a>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center font-semibold text-xl pt-10">
            <img src="copyright.png" alt="" />
            <span>2024 | Portfolio of <a href="/" className="hover:text-theme-1-4 custom-pointer">Krishnasankar</a> | Kerala, India</span>
          </div>
        </section>
    )
}
export default Footer