
const Cards=({details})=>{
    console.log(details.Poster)
return(
  
    <div className="card">
        <h1>{details.Title}</h1>
        <img src={details.Poster == "N/A" ?'https://m.media-amazon.com/images/M/MV5BYWQ5ZjgyMmEtMWUwNi00YmJjLTljOWUtNDlkNjNlMDU2NDJjXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg':details.Poster} alt="" />
        <p>({details.Year})</p>
    </div>
)
}
export default Cards;