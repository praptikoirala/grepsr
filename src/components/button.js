import React from 'react'

const Button = ({children, onClick, type}) => {
  const classNameMap = {
    primary: 'w-72',
    secondary: 'w-fit px-5'
  }

  return (
    <button className={`btn ${classNameMap[type]}`} onClick={(event) => {
      onClick && onClick(event)
    }}>
      {children}
    </button>
  )
}

export default Button
