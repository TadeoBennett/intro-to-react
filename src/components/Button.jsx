import React from 'react'

//a more simplified way to declare this componenet
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

export default Button