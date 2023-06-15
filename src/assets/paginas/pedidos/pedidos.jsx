import { useFetch } from "../../../useFetch"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./pedidos.css"
import Progreso from "../../componetes/progreso/progreso"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Pedidos() {
  const [carts, setCarts] = useState([]);
const [product, setProduct] = useState(null);
const productId = 5; // ID del producto que deseas obtener

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/carts');
        const data = response.data;
        setCarts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCarts();
  }, []);
  const bull = (

    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  

  return (
    <div className="pedidos">
      {carts.map((cart) => (
        <div key={cart.id}>
          {cart.products.map((product) => (
            <div className="mak">
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              carrito:{cart.id}
              </Typography>
              <Typography variant="h5" component="div">
              producto: {product.productId}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 fecha:{cart.date}
                 </Typography>
                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
                   cantidad:{product.quantity}
                    </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              usuario:{cart.userId}
              </Typography>
            </CardContent>
          </Card>
            </div>
          ))}
        </div>
      ))}
    
    </div>
  )
}
export default Pedidos
