import React from 'react'
import { useSelector } from 'react-redux';

const Contact = () => {
  const isLight = useSelector((state)=>state.isLight)
  return (
    <div style={{marginTop:'-1.5rem'}} className={isLight?"light":"dark"}>
     <h1>You can mail me help@geekster.in</h1>
    </div>
  )
}

export default Contact;