import "./administrar.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [product, setProduct] = useState(null);
  const productId = 5; // ID del producto que deseas obtener

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        const productData = response.data;
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
};

export default MyComponent;