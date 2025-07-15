import style from './App.module.css'
import { Navbar } from './componets/navbar/navbar'
import {Hero} from './componets/hero/hero'
import { About } from './componets/about/about'
import { ScrollToTop } from './componets/scrollToTop/scrollToTop'


function App() {
  return <div className={style.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <ScrollToTop/>
  </div>
}

export default App
