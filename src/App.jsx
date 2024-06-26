import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Divider from './components/Divider'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (
    <div className='bg-theme-1-4 text-theme-1-1 flex flex-col items-center justify-center -z-50 custom-cursor' id='home'>
     <Navbar />
     <About />
     <Divider />
     <Skills />
     <Divider />
     <Projects />
     <Divider />
     <Contact />
     <Footer />
     <SpeedInsights />
     <Analytics />
    </div>
  )
}

export default App
