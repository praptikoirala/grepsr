import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../components/product-card";
import CategoryPanel from "../components/category-panel";
import Capitalize from "../lib/capitalize";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const [products, setProuducts] = useState("");
    const [loading, setLoading] = useState(false);

    const { activeCategory } = useSelector((state) => state.categories);

    const navigate = useNavigate()

    useEffect(() => {
        getProducts();
    }, [activeCategory]);

    const getProducts = async () => {
        setLoading(true);
        // setShowChart(false);

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