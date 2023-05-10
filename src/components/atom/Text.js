import React from 'react'

const Text = ({children, className, ...rest}) => {
  return (
    <p className={className} {...rest}>{children}</p>
  )
}

export default Text
