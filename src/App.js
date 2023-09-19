import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.css";

import Homepage from "./pages/homepage";
import Products from "./pages/products";
import ProductDetails from "./pages/product-details";
import Header from "./components/header";
import Chart from "./pages/chart";

function App() {
    const { authUser } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authUser) {
            navigate("/");
        }
    }, [authUser]);

    return (
        <main>
            <Header />

            <div className="mt-[75px]">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/chart" element={<Chart />}/>
                </Routes>
            </div>
        </main>
    );
}

export default App;