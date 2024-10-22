
import React from 'react'
import { useCart } from './CartContext'
import"./UserCart.css"
import Button from 'react-bootstrap/Button';




const UserCart = () => {

    const {cartItems, addToCart, removeFromCart} = useCart()

    console.log(cartItems);

  return (
<>



<div>
    <h2 className='y-cart' style={{display:'flex',alignItems:'center', marginTop:'80px'}}>Your Cart</h2>
 {cartItems.length ===0 ?
    ( <div><h5 className='empty' style={{display:'flex',alignItems:'center'}}>Your Cart is Empty..<br/> look like you havent made <br/> your choice yet.... </h5></div> ):
   <div>
     {cartItems.map((item)=>{
        return(
            <div className='cart-section'>
                <div className="cart-img">
                    <img src={item.image} alt="" />
                </div>
                <div className="cart-details">
                    
                    <h2> price:
                        {item.price}
                    </h2>
                    <h3 style={{fontFamily:'serif'}}>{item.title}</h3>
                </div>
                <Button  variant="danger" className='removeBtn' onClick={() => removeFromCart(item)}>Remove</Button>
               
            </div>
        )
    })}
   </div>

} <br /> <br /> <br /> <br /> <br />
<div>
       <footer style={{ backgroundColor: 'dark-blue', padding: '10px', textAlign: 'center', margin: '5px', borderRadius: '12px' }}>
          <h3 style={{ margin: '0' }}>
          <span style={{ marginLeft: 'auto', color: 'white' }}>Contact Details</span>
          </h3>

         <label>Trade Name: E-MART</label><br />
           <label>Email support: E-MART@gmail.com</label><br />
          <label>Customer Care Number: +9198493210</label><br />
         </footer> 
      </div>
     
    </div>
</>
  )
}

export default  UserCart