import React from 'react'
import {useState,useEffect} from 'react'

const TitleUseEffect = () => {
  const [msg, setMessage] = useState('');  
  useEffect(() => {
    return () => {
      setMessage("TitleUseEffect")
    }
  }, [])
  
  return (
    <div><h1>{msg}</h1></div>
  )
}

export default TitleUseEffect
