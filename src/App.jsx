import style from './App.module.css'
import { Navbar } from './componets/navbar/navbar'
import {Hero} from './componets/hero/hero'
import { About } from './componets/about/about'


function App() {
  return <div className={style.App}>
    <Navbar/>
    <Hero/>
    <About/>
  </div>
}

export default App
