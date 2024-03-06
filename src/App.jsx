import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='bg-theme-1-4 text-theme-1-1 flex flex-col items-center justify-center -z-50 gap-10'>
     <Navbar />
     <About />
     <Skills />
     <Projects />
    </div>
  )
}

export default App
