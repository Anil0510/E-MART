import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import './Product.css';
import Button from 'react-bootstrap/Button';


const Product = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { addToCart, cartItems, removeFromCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${productid}`);
      const productRes = await response.json()
      setProduct(productRes);
      setLoading(false);
    }
    getProduct()

  }, [productid])

  const Loading = () => {
    return (
      <>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="productItem"
        key={product.id}
        height="250px">

        <img src={product.image} alt={product.title} height="400px" width="400px"   />
        <div id='descrption'>
          <h4>{product.category}</h4>
          <h1>{product.title}</h1>
          <p>Rating: {product.rating && product.rating.rate}</p>

          <h3>₹{product.price}</h3>
          <p>{product.description}</p></div>
        <button  id='add'   onClick={() => addToCart(product)}>ADD TO CART</button> 

 

        
        
      </div>
    );
  };

  return (
    <div>
      {loading ? <Loading /> : <ShowProduct />} <br /> <br /> <br />

      <footer style={{ backgroundColor: 'dark-blue', padding: '10px', textAlign: 'center', margin: '10px', borderRadius: '12px' }}>
          <h3 style={{ margin: '0' }}>
          <span style={{ marginLeft: 'auto', color: 'white' }}>Contact Details</span>
          </h3>

         <label>Trade Name: E-MART</label><br />
           <label>Email support: E-MART@gmail.com</label><br />
          <label>Customer Care Number: +9198493210</label><br />
         </footer> 


    </div>
  );
};
export default Product;

