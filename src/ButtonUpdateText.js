import React from 'react'
import { useState } from 'react';
import MyButton from './MyButton';

const ButtonUpdateText = () => {
  const [text, setText] = useState("Button was not Pressed");
  const handleButtonPress = () => {
    setText("Button Was Pressed");
  }
  return (
    <div><h2>ButtonUpdateText: {text} <MyButton onClick={handleButtonPress}>ButtonUpdateText - Press Me</MyButton></h2></div>
  )
}

export default ButtonUpdateText