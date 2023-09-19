import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Capitalize from "../lib/capitalize";

import { setActiveCategory } from "../redux/slices/category-slice";

import ProductCard from "../components/product-card";
import CategoryPanel from "../components/category-panel";
import Button from "../components/button";

const Products = () => {
    const [products, setProuducts] = useState("");
    const [loading, setLoading] = useState(false);

    const { activeCategory } = useSelector((state) => state.categories);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        getProducts();
    }, [activeCategory]);

    const getProducts = async () => {
        setLoading(true);

        try {
            const response = await fetch(
                activeCategory 
                    ? `https://dummyjson.com/products/category/${activeCategory}`
                    : "https://dummyjson.com/products"
            );
            const data = await response.json();

            setProuducts(data.products);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleButtonClick = () => {
        navigate('/chart')
        dispatch(setActiveCategory(''))
    };

    return (
        <div className="flex">
            <CategoryPanel />
            <div className="ml-[250px] w-full">
                {loading ? 
                    (
                        <p className="text-lg text-grey-dark mx-auto w-fit mt-12">
                            Loading products...
                        </p>
                    ) : 
                    (
                        <section className="product-container">
                            <div className="flex justify-between items-center mb-5">
                                <h1 className="heading-lg mb-1">
                                    {activeCategory
                                        ? Capitalize(activeCategory)
                                        : "All Products"}
                                </h1>

                                <Button onClick={handleButtonClick} type="secondary">
                                    Show Chart
                                </Button>
                            </div>

                            <div
                                className="grid gap-7 items-center justify-items-center"
                                style={{
                                    gridTemplateColumns:
                                        "repeat(auto-fit, minmax(16rem, 1fr))",
                                }}
                            >
                                {products &&
                                    products.map((product, index) => {
                                        return (
                                            <ProductCard
                                                key={index}
                                                product={product}
                                            />
                                        );
                                    })}
                            </div>
                        </section>
                    )}
                </div>
        </div>
    );
};

export default Products;

{
    /* <Piechart /> */
}