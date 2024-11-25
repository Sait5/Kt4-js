import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Страница не найдена</h1>
      <Link to="/products">
        <button style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Перейти к списку товаров
        </button>
      </Link>
    </div>
  );
};

export default Error;