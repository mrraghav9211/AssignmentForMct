const Cards= ({name,hex}) =>{
    const bgcolor = {
        
        backgroundColor: hex
        
      };
      const color={
        color: hex,
        fontSize: 12
      }
    return(
    <>
        <div className="container">
        <div style={bgcolor} className="color"></div>
        <p>{hex}</p>
        <p style={color}>{name}</p>
        </div>
       
        </>
    )
}
export default Cards;