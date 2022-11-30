import React from 'react'
import { useState } from 'react';

const LabledButton = () => {
  
  const [label, setLabel] = useState("Press Me Please");  
  //let label = "Press Me Please";
  const handleButtonPress = () => {
    console.log("was pressed");
    setLabel("OK");
  }
  
  return (
    <div><h1><button onClick={handleButtonPress}>{label}</button></h1></div>
  )
}

export default LabledButton