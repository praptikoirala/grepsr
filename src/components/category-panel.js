import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'

import { setActiveCategory } from '../redux/slices/category-slice'

import Categories from './categories'

const CategoryPanel = () => {
    const [categories, setCategories] = useState('')
    const [active, setActive] = useState('all')

    const dispatch = useDispatch()

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async() => {
        try{
            const response = await fetch('https://dummyjson.com/products/categories')

            const data = await response.json()

            setCategories(data)
        }catch(error){
            console.log(error.message)
        }
    }

    const handleCategoryClick = (category) => {
        dispatch(setActiveCategory(category))

        setActive(category)
    }

    const showAllProducts = () => {
        dispatch(setActiveCategory(null))

        setActive('all')
    }

    return ( 
        <div className='border-r-2 py-3 px-9 w-fit h-screen overflow-y-scroll'>
            <h1 className='heading-sm-dark mb-3 flex justify-center'>Categories</h1>
            <div className='flex flex-col items-center space-y-3'>
                <p className={`category ${active === 'all' ? 'bg-grey-dark text-white' : 'bg-grey'}`} onClick={showAllProducts}>All</p>
                { categories && categories.map((category, index) => {
                    return <Categories key={index} category={category} active={active} onClick={handleCategoryClick} />
                })}
            </div> 
        </div> 
    )
}

export default CategoryPanel
