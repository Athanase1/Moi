
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import LayOut from "./components/layout/layout"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Home from "./pages/Home"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut/>}>
           <Route path="/" index element={<Home/>} />
           <Route path="/apropos" element={<About/>}/>
           <Route path="/projects" element={<Projects/>}/>
           <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
