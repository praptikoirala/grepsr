import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {MdDiscount} from 'react-icons/md'
import {AiOutlineArrowLeft} from 'react-icons/ai'

import Capitalize from '../lib/capitalize'

import { setDetails } from '../redux/slices/details-slice'

const ProductDetails = () => {
    const [loading, setLoading] = useState(false)
    // const [details, setDetails] = useState('')

    const { id } = useParams()
    
    const { details } = useSelector((state) => state.details)
    // console.log(details)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
        getProductDetails()
    }, [id])

    const style = 'flex items-center mb-2'
    const separation = 'border-r-2 pr-3 mr-3'

    // console.log(details)
    // console.log(id)

    const getProductDetails = async () => {
        setLoading(true)

        try{
            console.log(id)
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await response.json()
          
            dispatch(setDetails(data))
        }catch(error){
            console.log(error.message)
        }finally{
            setLoading(false)
        }
    }

    const handleArrowClick = () => {
        navigate('/products')
    }

    console.log(details)

    return (
        // <p>hello</p>
        
        loading ? 
        <p className='flex justify-center text-lg text-grey-dark my-3'>Loading product details...</p> :
        (    <div className='p-5'>
                <h1 className='heading-sm-dark flex items-center justify-center'><span className='mr-1 rounded-full p-1 hover:bg-grey-dark hover:text-white hover:cursor-pointer' onClick={handleArrowClick}><AiOutlineArrowLeft /></span>{Capitalize(details?.title)}</h1>

                <div className='flex flex-col justify-center items-center'>
                    {/* <div className=' border-2 border-black p-5 w-[30rem] overflow-x-scroll'>
                        <div className='flex justify-center items-center space-x-5'>
                            {
                                details?.images.map((image, index) => {
                                    return( 
                                        <div key={index} className='w-56 border rounded-md'>
                                            <img src={image} alt={details?.title} className='w-full h-48 rounded-md' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> */}
                    <div className='flex space-x-10 justify-center items-center mt-5'>
                        <div className='text-grey-dark'>
                            <p className={style}><span className={separation}>Brand</span>{details?.brand}</p>
                            <p className={style}><span className={separation}>In Stock</span>{details?.stock}</p>
                            <p className={style}><span className={separation}>Rating</span>{details?.rating}/5</p>

                            <h3 className={`heading-sm-dark mb-0 ${style}`}><span className='mr-1'>Rs.</span>{details?.price}</h3>
                            <p className={`text-sm ${style}`}><span className='mr-1'><MdDiscount /></span>{details?.discountPercentage}%</p>
                        </div>

                        <div className='bg-grey h-fit p-5 rounded-lg w-96'>
                            <p className='text-grey-dark text-sm'>Description</p>
                            <p>{details?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default ProductDetails

// brand 
// title
// price 
// rating
// discount
// stock
// description
// thumbnail

// category
// id
// images