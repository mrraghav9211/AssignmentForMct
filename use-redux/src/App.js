import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route
 
} from "react-router-dom";
import Contact from './components/Contact';
import Service from './components/Service';
import Home from "./components/Home";
import { useSelector } from "react-redux";


function App() {
  const msg=useSelector((state)=>state.msg)
  return (
    <>
      
      
      <BrowserRouter>
      <div>{msg}</div>
            <Navbar/>
            
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="contect" element={<Contact/>}></Route>
        <Route path="service" element={<Service/>}></Route>
      
        </Routes>
        </BrowserRouter>

    </>
    
  );
}

export default App;
