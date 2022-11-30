import React from 'react'
import { useState } from 'react';

const LabledButtonWithParams = () => {
  
  const [label, setLabel] = useState("Press Me Please");  
  const handleButtonPress = (msg) => {
    setLabel(msg);
  }
  
  return (
    <div>
      <h1><button onClick={()=>handleButtonPress("Wrapper Pressed")}>{label}</button></h1>
      </div>
  )
}

export default LabledButtonWithParams