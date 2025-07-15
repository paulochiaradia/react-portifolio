import style from './App.module.css'
import { Navbar } from './componets/navbar/navbar'
import {Hero} from './componets/hero/hero'
import { About } from './componets/about/about'
import { ScrollToTop } from './componets/scrollToTop/scrollToTop'
import { Experience } from './componets/experience/experience'


function App() {
  return <div className={style.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <ScrollToTop/>
    <Experience/>
  </div>
}

export default App
