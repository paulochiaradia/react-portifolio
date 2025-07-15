import style from './App.module.css'
import { Navbar } from './componets/navbar/navbar'
import {Hero} from './componets/hero/hero'

function App() {
  return <div className={style.App}>
    <Navbar />
    <Hero />
  </div>
}

export default App
