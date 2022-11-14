
const Cards=({data,Kcal})=>{
    // const Kcal=data.recipe.calories.substring(0,4);
   return(
    <>
   
    <div className="card">
        <img src={data.recipe.image} alt="" />
        <h2>{data.recipe.label}</h2>
        <p>{data.recipe.mealType}</p>
        <div className="otherdelails">
            <span>{Kcal} Kcal</span>
            <span><i class="fa-regular fa-heart"></i></span>
        </div>
    </div>
    </>
   )
}
export default Cards;