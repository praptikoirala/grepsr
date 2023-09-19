import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PieChart, PieArcSeries } from 'reaviz'

const Piechart = () => {
    const { category, categoryCount } = useSelector((state) => state.categories)

    // console.log(category)
    // console.log(categoryCount)
    const data = category.map((key, index) => ({
        key: key,
        data: categoryCount[index],
    }));



    console.log(data)
    const colorScheme = ['#999999', '#777777', '#555555', '#333333', '#111111']

    return (
        // <p>hi</p>
        <div className='flex items-center justify-center'>
            <PieChart width={450} height={350} data={data} series={<PieArcSeries colorScheme={colorScheme} />} />
        </div>
    )
}

export default Piechart
