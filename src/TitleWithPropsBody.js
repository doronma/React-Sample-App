import React from 'react'


const TitleWithPropsBody = ({ align,children }) => {
  return (
    <div><h1 align={align}>{children}</h1></div>
  )
}



export default TitleWithPropsBody