import Home from './components/Home'
import Navbar from './components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route
 
} from "react-router-dom";
import Contact from './components/Contact';
import Service from './components/Service';
import { createContext, useState } from 'react'

const ToggleClr = createContext()
const Togglecolor= createContext()
const App = () => {
  const [bgcolor, setbgcolor] = useState("white")
  const [color, setcolor] = useState("black")
  const toggle=()=>{
    if(bgcolor === "white"){
      setbgcolor("black")
      setcolor("lightgreen")
    }else{
      setbgcolor("white")
      setcolor("black")
    }
  }
  const appColor={
    backgroundColor:bgcolor,
    padding:'10px'
  }
  return (
    <div>
     <p>I have changed theme to {bgcolor==="white"?"Light":"Dark"}</p>
      <BrowserRouter>
      <div style={appColor}>
      <Navbar />
      <br />
      <button onClick={toggle}>Toggle Theme to {bgcolor==="white"?"Dark":"Light"}</button>
      </div>
      <Routes>
        <Route path="/" element={
      <ToggleClr.Provider value={bgcolor}>
        <Togglecolor.Provider value={color}>
        <Home />
        </Togglecolor.Provider>
      </ToggleClr.Provider>
       

        } />
        <Route path="contect" element={
        <ToggleClr.Provider value={bgcolor}>
        <Togglecolor.Provider value={color}>
        <Contact />
        </Togglecolor.Provider>
      </ToggleClr.Provider>
        } />
        <Route path='service' element={
        <ToggleClr.Provider value={bgcolor}>
        <Togglecolor.Provider value={color}>
        <Service/>
        </Togglecolor.Provider>
      </ToggleClr.Provider>
        } />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
export {ToggleClr,Togglecolor};