import React from 'react'
import { useContext } from 'react';
import { ToggleClr,Togglecolor } from '../App';

const Contact = () => {
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
     <h1 style={color}>You can mail me help@geekster.in</h1>
    </div>
  )
}

export default Contact;