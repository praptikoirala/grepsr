import React from 'react'

const FormGroup = ({type, placeholder, value, onChange}) => {
    const handleInputChange = (event) => {
        onChange(event.target.value)
    }
 
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={handleInputChange}
            className='w-72 py-1 px-3 outline-none border border-grey-light rounded-sm focus:border-grey-dark'
        />
    )
}

export default FormGroup
