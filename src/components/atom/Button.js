import React from 'react'

const Button = ({children, className, onClick, type}) => {
  return (
    <button className={className} type={type} onClick={onClick}>{children}</button>
  )
}

export default Button
