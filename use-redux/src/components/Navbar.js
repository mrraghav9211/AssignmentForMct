import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setisLight } from '../slice'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const isLight = useSelector((state)=>state.isLight)

  const dispeach = useDispatch()
  return (
    <div className={isLight?"light":"dark"}>
         <nav>
         <Link to="/">Home</Link>
          <br />
          <Link to="contect">Contact</Link>
          <br />
          <Link to="service">Service</Link>
         </nav>
         <br />
         <button onClick={()=>{
          const message = `I have changed theme to ${isLight?"Light":"Dark"}`
          dispeach(setisLight(message))
          }}>Toggle Theme to {isLight?"Dark":"Light"}</button>
    </div>
  )
}

export default Navbar