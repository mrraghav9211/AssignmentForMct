const Card=({imgUrl, posterUrl, title, releaseYear, description, type})=>{
    const image='https://image.tmdb.org/t/p/w500';
    const bgColor={
        backgroundImage : "url(" +image +posterUrl+ ")",
        backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center center',
    width: '100%',
    height: '45vh',
    marginTop: '5px',
    }
return(
    <div style={bgColor}  className="container">
        <div className="img">
            {/* <img src={`https://image.tmdb.org/t/p/w500${posterUrl}`} alt="" /> */}
            <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt=""/>
            <div className="details">
                <h2>{title}</h2>
                <span>{releaseYear}</span><br />
            <span>{type}</span>
            </div>
        </div>
      <p>{description}</p>
    </div>
)
}
export default Card;