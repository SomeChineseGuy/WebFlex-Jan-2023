import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // navigate('/about');
      // navigate(-1); // back
      navigate(1); // forward
    }, 3000)
  }, []);

  return (
    <div>
      <h1>Welcome to my Product page!</h1>
      <h2>You're on Product #{params.id}</h2>
    </div>
  )
};

export default Product;
