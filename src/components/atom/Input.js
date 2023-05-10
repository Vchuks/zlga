import React from 'react'

const Input = ({type, placeholder, className, ...rest}) => {
  return (
    <input type={type} placeholder={placeholder} className={className} {...rest}/>
  )
}

export default Input
