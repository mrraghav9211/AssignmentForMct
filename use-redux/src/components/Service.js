import React from 'react'
import { useSelector } from 'react-redux'


const Service = () => {
  const isLight=useSelector((state)=>state.isLight)
  return (
    <div style={{marginTop:'-1.5rem'}} className={isLight?"light":"dark"}>
      <h1>Our service are not available</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dolor quae quas aliquid necessitatibus eius voluptate expedita, 
         sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, 
         modi asperiores?</p>
    </div>
  )
}

export default Service