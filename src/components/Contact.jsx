'use client'
import { useState, useRef } from "react"
import emailjs from 'emailjs-com';

function Contact() {
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Message submitted:${message}`);
    try {
      await emailjs.sendForm(
        'service_bo945fs',
        'template_l2bxd28',
        form.current,
        'uWLEwtRUKNDc5vowO',
      );
      alert(`Message submitted:${message}`);
    } catch (error) {
      console.error('Error sending email:', error);
    }

  };


    return (
        <div className="w-full flex sm:flex-col flex-wrap md:flex-row items-center justify-evenly p-4 gap-4 mt-24" id="contact">
          <div className="relative flex flex-col bg-theme-1-3 w-auto h-auto rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom">
            <span className="w-[30rem] font-extrabold text-7xl z-50">Let&apos;s get <br /> in touch</span>
            <span className="absolute -bottom-10 right-20 -z-0 flex flex-col bg-theme-1-4 opacity-65 border-2 border-theme-1-3 w-28 h-24 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom"></span>
            <span className="font-bold text-4xl"><br />Say hello!</span>
            <span className="font-bold text-xl text-theme-1-2"><br />Phone</span>
            <a href="tel:917306310132" className="font-bold text-2xl cursor-pointer">+91 7306310132</a>
            <span className="font-bold text-xl text-theme-1-2 "><br />Email</span>
            <a href="mailto:example@email.com?subject=Subject%20of%20the%20Email&body=Hello%20there!" className="font-bold text-2xl z-50 cursor-pointer">krishnasankarofficial@gmail.com</a>
            <br />
            <div className="sm:flex md:hidden flex-row gap-4">
              <a href="https://linkedin.com/in/krishnasankar-k-k-a59455178/">
                <img className="w-10 h-10" src="/linkedin.png" alt="linkedin" />
              </a>
              <a href="https://github.com/krishnasankarkk">
                <img className="w-10 h-10" src="/github.png" alt="github" />
              </a>
              <a href="https://www.instagram.com/artbykichu">
                <img className="w-10 h-10" src="/instagram.png" alt="instagram" />
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={handleSubmit} className="sm:hidden md:flex flex-col gap-4">
            <div className="flex flex-col text-2xl w-full items-start">
              <span className="font-bold">I&apos;m excited to hear from you.</span>
              <span className="font-bold">Let&apos;s start something special together.</span>
              <span className="font-bold">Call me for any query.</span>
            </div>
            <div className="flex flex-row text-xl w-full items-start gap-4 mt-10">
              <input className="bg-transparent border-4 border-theme-1-3 p-4 rounded-2xl" type="text" name="user_name" id="name" placeholder="Name"/>
              <input className="bg-transparent border-4 border-theme-1-3 p-4 rounded-2xl" type="email" name="user_email" id="email" placeholder="Email"/>
            </div>
            <div className="flex flex-row text-xl w-full items-start gap-4">
              <textarea className="bg-transparent border-4 border-theme-1-3 p-4 rounded-2xl w-full h-52 items-start justify-start" 
                type="text" 
                name="message" 
                id="message" 
                value={message}
                onChange={handleMessageChange}
                rows={8}
                placeholder="Message"/>
            </div>
            <button className="flex w-full h-20 bg-theme-1-4 border-4 border-theme-1-1 hover:bg-theme-1-3 items-center justify-center text-2xl font-bold rounded-2xl">Send</button>
          </form>
        </div>
    )
}
export default Contact