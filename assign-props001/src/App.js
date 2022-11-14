import React, { useState } from 'react';
import Cards from "./components/Cards";
import {Data} from "./Data"

function App() {
  // const [hex, setHex] = useState([])
  
  
 
  return (
    <div className="App">
      {Data.map((ele,idx)=>
     <Cards name={ele.name} hex={ele.hex}/>
      )}
     
     
    </div>
  );
}

export default App;
