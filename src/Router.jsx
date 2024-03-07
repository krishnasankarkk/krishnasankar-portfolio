import { HashRouter, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import App from './App';
import Contact from './components/Contact';

function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/">
                    <App />
                </Route>
                <Route path="#about">
                    <About />
                </Route>
                <Route path="#skills">
                    <Skills />
                </Route>
                <Route path="#projects">
                    <Projects />
                </Route>
                <Route path="#contact">
                    <Contact />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default Router