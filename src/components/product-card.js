import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDiscount } from 'react-icons/md'

const ProductCard = ({ product }) => {
    const { id, title, price, thumbnail, discountPercentage } = product

    const navigate = useNavigate()

    const handleProductClick = async (id) => {
        navigate(`/products/${id}`)
    }

    return (
        <div className='product-card hover:cursor-pointer hover:scale-95' onClick={() => handleProductClick(id)}>
            <div>
                <img src={thumbnail} alt={title} className='thumbnail'/>
            </div>

            <div className='p-3 w-64'>
                <h3 className='heading-sm-dark'>{title}</h3>
                <h2 className='heading-sm-dark text-lg'>Rs. <span>{price}</span></h2>
                {
                    discountPercentage && <h2 className='heading-sm text-lg flex items-center text-grey-dark'><MdDiscount />{discountPercentage}</h2>
                }
            </div>
        </div>
    )
}

export default ProductCard
