import React from 'react'


const Total = (props) => {
  let count = 0;
  return (
    <>
      {props.total.map((part, index) =>{
        count += part.exercises
      })}
      <p>Number of exercises: {count}</p>
    </>
  )
}

export default Total