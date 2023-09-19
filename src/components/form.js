import React from 'react'

const Form = ({ children, onSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault()

    onSubmit(event)
  }

  return (
    <form className='flex flex-col space-y-3' onSubmit={handleFormSubmit} >
      {children}
    </form>
  )
}

export default Form
