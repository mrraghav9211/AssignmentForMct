import React from 'react'
import { useContext } from 'react';
import { ToggleClr,Togglecolor } from '../App';

const Service = () => {
  const bgClr = useContext(ToggleClr)
  const clr=useContext(Togglecolor)
  const stl={
    backgroundColor:bgClr,
    marginTop:"-22px"
  }
  const color={
    color:clr
  }
  return (
    <div style={stl}>
      <h1 style={color}>Our service are not available</h1>
      <p style={color}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dolor quae quas aliquid necessitatibus eius voluptate expedita, 
         sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, 
         modi asperiores?</p>
    </div>
  )
}

export default Service