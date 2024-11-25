import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Rating from "./components/Rating";
import Error from "./components/Error";
import './App.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/products" element={
                    <div className="products-container">
                        {data.map((elem) => (
                            <div key={elem.id} className="product-card">
                                <h3>{elem.title}</h3>
                                <Rating rating={elem.rating.rate} />
                                <Link to={`/product/${elem.id}`}>Подробнее</Link>
                            </div>
                        ))}
                    </div>
                } />
                <Route path="/product/:id" element={<ProductDetailPage data={data} />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

function ProductDetailPage({ data }) {
    const productId = window.location.pathname.split("/").pop();
    const product = data.find((elem) => elem.id === parseInt(productId));

    if (!product) return <div>Товар не найден!</div>;
    return (
        <div className="product-detail-container">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} style={{ width: "200px", height: "auto" }} />
            <p>{product.description}</p>
            <Rating rating={product.rating.rate} isEditable={true} />
            <p>Цена: ${product.price}</p>
            <button onClick={() => window.history.back()}>Назад</button>
        </div>
    );
}

export default App;