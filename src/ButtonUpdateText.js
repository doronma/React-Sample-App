import React from 'react'
import { useState } from 'react';
import MyButton from './MyButton';

const ButtonUpdateText = () => {
  const [text, setText] = useState("Button was not Pressed");
  const handleButtonPress = () => {
    setText("Button Was Pressed");
  }
  return (
    <div><h1>{text} <MyButton onClick={handleButtonPress}>press me</MyButton></h1></div>
  )
}

export default ButtonUpdateText