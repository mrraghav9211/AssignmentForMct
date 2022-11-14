import { useEffect, useState, useRef } from "react";
import axios from 'axios'
import Cards from "./components/Cards";

function App() {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState("paneer");
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get(`https://api.edamam.com/api/recipes/v2?q=${query}&app_id=c0ff9c8f&app_key=864f900480eab44945907342ee7d3d86&type=public`).then((response) => {
      setPost(response.data.hits);
    });
  },[query]);
  const refQuery=useRef(null);
  // const handleChange=(e)=>{
  //   setMessage(e.target.value)
  // }
  const handleSearch=()=>{
    setQuery(message);
  }
  
  
  return (
    <>
    <h1>Our Recipes App</h1>
    <div className="search">
      
      <input type="text"
       ref={refQuery}
       value={message}
       onChange={(e)=> setMessage(e.target.value)}
       />
      <button onClick={handleSearch}>Search</button>
      
      
    </div>
   
    <div className="App">
   
     {
      post.map((value)=>
      <Cards data={value} Kcal={value.recipe.calories.toString().substr(0, 4)} />
      )
     }
     
    </div>
    </>
  );
}

export default App;
