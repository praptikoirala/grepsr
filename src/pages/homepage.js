import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'

import { FaSignInAlt } from 'react-icons/fa'

import { setUser } from '../redux/slices/user-slice'

import Form from '../components/form'
import FormGroup from '../components/form-group'
import Button from '../components/button'

const Homepage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { authUser } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(authUser){
      navigate('/products')
    }
  }, [authUser])



  const handleFormSubmit = async () => {
    setError('')

    try{
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
      })

      const data = await response.json()

      if(response.ok){
        dispatch(setUser(data))
        navigate('/products')
      }else{
        setError(data.message)
      }
    }catch(error){
      console.log(error.message)
    }finally{
      setPassword('')
      setUsername('')
    }
  }

  return (
    <div>
      <section className='header-sec'>
        <h1 className='heading-lg'>
          <FaSignInAlt />
          Login
        </h1>
        <h3 className='heading-sm text-grey-dark'>
          Login and start exploring
        </h3>
      </section>

      <section className='form-sec'>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup type="text" placeholder="your username" value={username} onChange={setUsername}/>
          <FormGroup type="password" placeholder="your password" value={password} onChange={setPassword}/>
          <p className='text-red-500 text-center text-sm'>{error}</p>
          <Button type='primary'>Submit</Button>
        </Form>
      </section>
    </div>
  )
}

export default Homepage
