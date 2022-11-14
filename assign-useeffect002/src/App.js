import{useEffect, useState} from 'react'
import axios from 'axios'
import Cards from './components/Cards';

function App() {
  const [Data, setData] = useState([]);
  const [query, setQuery] = useState("kabhi");
  const [message, setMessage] = useState('')
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${query}&apikey=492bb740`).then((res)=>{
       setData(res.data.Search);
    })
  },[query])
 
  const handleChange=(e)=>{
   setMessage(e.target.value);
  }
  
  const handleClick=()=>{
    setQuery(message);
  }
  return (
    <>
    <h1 style={{textAlign:'center',color:'rgb(52, 55, 124)'}} >Movie Search App</h1>
    <div className="search">
      <input type="text"
      onChange={handleChange}
      value={message}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
    <div className="App">
      {
        Data.map((value)=>
          <Cards details={value} />
        )
      }
    </div>
    </>
  );
}
export default App;