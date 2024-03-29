'use client'
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

function Contact() {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Function to handle form submit.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await emailjs.sendForm(
        'service_bo945fs',
        'template_l2bxd28',
        form.current,
        {
          publicKey:'uWLEwtRUKNDc5vowO',
        }
      );
      setIsLoading(false);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
    }

  };


    return (
        <section className="w-full flex flex-col lg:flex-row items-center justify-evenly p-4 gap-24 pt-24" id="contact">
          {isVisible && (
            <div className="fixed top-32 left-1/2 z-50 flex flex-row items-center justify-center bg-theme-1-4 border-2 border-theme-1-1 rounded-full text-theme-1-1 font-bold p-4 -translate-x-1/2">
              <img src="/check.png" alt="Tick" />
              <span>Message sent successfully!</span>
            </div>
          )}
            {isLoading ? (
              <div className="flex font-bold text-xl animate-spin fixed top-1/2 left-1/2">
                <img className="w-14 h-14" src="/loading.png" alt="Loading" />
              </div>
            ) : (
              <></>
            )}
          
          <div className="relative flex flex-col bg-theme-1-3 w-full h-auto rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom">
            <span className="font-extrabold text-5xl xs:text-7xl z-10">Let&apos;s get <br /> in touch</span>
            <span className="absolute -bottom-10 right-20 -z-0 flex flex-col bg-theme-1-4 opacity-65 border-2 border-theme-1-3 w-28 h-24 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom"></span>
            <span className="font-bold text-4xl"><br />Say hello!</span>
            <span className="font-bold text-xs xs:text-xl text-theme-1-2"><br />Phone</span>
            <a href="tel:917306310132" className="font-bold text-md xs:text-2xl cursor-pointer">+91 7306310132</a>
            <span className="font-bold text-xs xs:text-xl text-theme-1-2"><br />Email</span>
            <a href="mailto:krishnasankarofficial@gmail.com?subject=Subject%20of%20the%20Email&body=Hello%20there!" className="font-bold text-sm xs:text-2xl z-10 cursor-pointer">krishnasankarofficial@gmail.com</a>
            <br />
          </div>
          <form ref={form} onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex flex-col text-2xl w-full items-start">
              <span className="font-bold">I&apos;m excited to hear from you.</span>
              <span className="font-bold">Let&apos;s start something special together.</span>
              <span className="font-bold">Contact me for any query.</span>
            </div>
            <div className="flex flex-col xs:flex-row text-xl w-full items-start gap-4 mt-10">
              <input className="bg-transparent border-2 border-theme-1-3 p-4 rounded-2xl w-full" 
                type="text" 
                name="user_name" 
                id="user_name" 
                value={username}
                required
                onChange={handleUsernameChange}
                placeholder="Name"/>
              <input className="bg-transparent border-2 border-theme-1-3 p-4 rounded-2xl w-full" 
                type="email" 
                name="user_email" 
                id="user_email" 
                value={email}
                required
                onChange={handleEmailChange}
                placeholder="Email"/>
            </div>
            <div className="flex xs:flex-col md:flex-row text-xl w-full items-start gap-4">
              <textarea className="bg-transparent border-2 border-theme-1-3 p-4 rounded-2xl w-full h-52 items-start justify-start" 
                type="text" 
                name="message" 
                id="message" 
                value={message}
                required
                onChange={handleMessageChange}
                rows={8}
                placeholder="Message"/>
            </div>
            <button className="flex w-full h-20 bg-theme-1-4 border-2 border-theme-1-1 hover:bg-theme-1-3 items-center justify-center text-2xl font-bold rounded-2xl">Send</button>
          </form>
        </section>
    )
}
export default Contact