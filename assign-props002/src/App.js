import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './components/Card';

function App() {
  
  const [details, setDetails] = useState([]);

  const fetchData=()=>{
    axios.get("https://api.themoviedb.org/3//trending/movie/week?api_key=8d382a141ad7361add2d2c8cf067b425")
    .then((response)=>{
      setDetails(response.data.results);
    })
  }
useEffect(() => {
  
  fetchData();
},[])
console.log(details)

  return (
    <div className="App">
      {
        details.map((value)=>

            <Card imgUrl={value.poster_path} posterUrl={value.backdrop_path} title={value.title} releaseYear={value.release_date.substring(0,4)} description={value.overview} type={value.media_type} />
        )
      }
      
    </div>
  );
}

export default App;
