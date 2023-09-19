import React, { useEffect } from "react";
import Capitalize from "../lib/capitalize";
import { useDispatch } from "react-redux";

import { setCategoryCount } from "../redux/slices/category-slice";

const Categories = ({ category, active, onClick }) => {
    const dispatch = useDispatch();

    const handleCategoryClick = () => {
        return onClick(category);
    };

    useEffect(() => {
        handleCategoryCount();
    }, [category]);

    const handleCategoryCount = async () => {
        try {
            const res = await fetch(
                `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();

            dispatch(setCategoryCount({ key: category, count: data.total }));
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <p
            className={`category ${
                active === category ? "bg-grey-dark text-white" : "bg-grey"
            }`}
            onClick={handleCategoryClick}
        >
            {Capitalize(category)}
        </p>
    );
};

export default Categories;