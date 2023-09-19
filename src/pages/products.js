import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setActiveCategory } from '../redux/slices/category-slice'

import ProductCard from '../components/product-card'
import CategoryPanel from '../components/category-panel'
import Capitalize from '../lib/capitalize'
import Piechart from '../components/piechart'
import Button from '../components/button'

const Products = () => {
    const [products, setProuducts] = useState('')
    const [loading, setLoading] = useState(false)
    const [showChart, setShowChart] = useState(false)

    const { activeCategory } = useSelector((state) => state.categories)

    const dispatch = useDispatch()

    useEffect(() => {
        getProducts()
    }, [activeCategory])

    const getProducts = async () => {
        setLoading(true)
        setShowChart(false)

        try{
            const response = await fetch(activeCategory ? `https://dummyjson.com/products/category/${activeCategory}` : 'https://dummyjson.com/products')
            const data = await response.json()

             setProuducts(data.products)
        }catch(error){
            console.log(error.message)
        }finally{
            setLoading(false)
        }
    }

    const handleButtonClick = () => {
        setShowChart(true)
    }

    // console.log(showChart)

    return (
        <div className='flex'>
            <CategoryPanel />

            {
                showChart ?
                (
                    <Piechart />
                ) : 
                (
                    loading ? 
                    <p className='text-lg text-grey-dark mx-auto my-3'>Loading products...</p> :
                    <section className='product-container'>
                        <div className='flex justify-between items-center mb-3'>
                            <h1 className='heading-lg mb-1'>{activeCategory ? Capitalize(activeCategory) : "All Products"}</h1>
                            {!showChart && <Button onClick={handleButtonClick} type='secondary'>Show Chart</Button> }
                        </div>
                        <div className='grid grid-cols-3 gap-y-3 items-center justify-items-center'>
                            { products && products.map((product, index) => {
                                return <ProductCard key={index} product={product}/>
                            })}
                        </div>
                    </section>
                )
            }
        </div>
    )
}

export default Products

{/* <Piechart /> */}