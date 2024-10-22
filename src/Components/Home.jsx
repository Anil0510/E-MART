import React, { useEffect, useState,useRef } from 'react';
import "./Home.css";
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchText, updateSearchText] = useState("");
  const productListRef = useRef(null);
  

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
    //  setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        const products = await response.json();
        setProducts(products);
        setData(products);
       // setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  useEffect(() => {
    const filteredProduct = products.filter((p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredProduct);
    // if (productListRef.current) {
    //   productListRef.current.scrollIntoView({ behavior: 'smooth' });
    // }
  }, [products, searchText]);

  // const Loading = () => {
  // };

  const filterProduct = (cat) => {
    if(cat==='all'){
      setData(products)
    } else{
    const updatedList = products.filter((x) => x.category === cat);
    setData(updatedList);}
    //setFilter(filterProduct)
    if (productListRef.current) {
      productListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
   };
   const handleCategory=(e)=>{
    const category=e.target.value
    filterProduct(category);
     
   };

  // const filter = (e) => {
  //   console.log("event", e.target.value)
  // }
  // const ShowProducts = () => {
  //   return (
  //     <>
  //       <div className="product-list">
  //         {data.map((product) => {
  //           return (
  //             <div className="product" key={product.id} style={{ height: '250px' }}>
  //               <NavLink to={`./product/${product.id}`}>
  //                 <img src={product.image} alt={product.title} height="100px" />
  //               </NavLink>
  //               <h5>{product.title}</h5>
  //             </div>
  //           );
  //         })}
  //       </div>
  //       <footer style={{ backgroundColor: 'dark-blue', padding: '20px', textAlign: 'center', margin: '50px', borderRadius: '12px' }}>
  //         <h3 style={{ margin: '0' }}>
  //           <span style={{ marginLeft: 'auto', color: 'black' }}>Contact Details</span>
  //         </h3>
  //         <label>Trade Name: E-MART</label><br />
  //         <label>Email support: E-MART@gmail.com</label><br />
  //         <label>Customer Care Number: +9198493210</label><br />
  //       </footer>
  //     </>
  //   );
  // };
  
  return (
    <div className='body'>
      {/* <h1 className='heading'>LATEST PRODUCTS</h1>

      <input id='search'
        type="text"
        value={searchText}
        onChange={e => updateSearchText(e.target.value)}
        placeholder="Search for products..."
      />  */}


      {/* <div className="button-group" style={{ padding: '30px', textAlign: 'center', position:'sticky',zIndex:'auto' }}>
        <button type="button" onClick={() => setData(products)}>All</button>
        <button type="button" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button type="button" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button type="button" onClick={() => filterProduct("electronics")}>Electronics</button>
        <button type="button" onClick={() => filterProduct("jewelery")}>Jewelry</button>
      </div> */}
{/* <div>
<label htmlFor="products">Choose a category:</label>

<select name="products" id="products" onChange={handleCategory}>
   <option value="">select a category </option>
   <option value="all">All</option>
  <option value="men's clothing"  >Men's Clothing</option>
  <option value="women's clothing">Women's Clothing </option>
  <option value="electronics"><button type="button">Electronics</button></option>
  <option value ="jewelery">Jewelry</option>
</select>
</div>
       */}
      <div className='top'>  
      <p style={{position:'absolute',padding:'200px' ,  alignContent:'center',fontFamily:'monospace',fontWeight:'bolder'}}>
      <h1 className='heading'>LATEST PRODUCTS</h1>
        Explore our extensive catalog, enjoy exclusive deals,  <br />
      and experience the joy of online  <br />shopping like never before.
          Shop with confidence at E-mart, <br /> where quality meets affordability.</p>
      <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/shopsy_desktop1721231141.png' alt='img' height='80%'/>
      </div>   
      <br />

     <Carousel className='m-5px'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://img.freepik.com/premium-photo/portrait-young-woman-wearing-sunglasses-against-blue-sky_1048944-16038537.jpg?size=626&ext=jpg&ga=GA1.1.1069217564.1721807531&semt=ais_user'
          alt='First slide'
          style={{ maxHeight: '300px',  objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Fashion at Its Best</h3>
          <p>Explore our latest collection of stylish clothing like never before.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://img.freepik.com/premium-photo/businessman-isolated-looks-through-glasses_115857-200.jpg?size=626&ext=jpg&ga=GA1.1.1069217564.1721807531&semt=ais_user'
          alt='second slide'
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Fashion at Its Best</h3>
          <p>Explore our latest collection of stylish clothing and accessories.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src="https://img.freepik.com/premium-photo/close-up-lizard-yellow-background_1048944-23047302.jpg?size=626&ext=jpg&ga=GA1.1.1508452457.1681979051&semt=ais_user"
          alt='third slide'
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />

        <Carousel.Caption>
          <h3>Unique Electronics</h3>
          <p>Discover the latest in tech gadgets and electronics.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img
          className='d-block w-100 m-4px'
          src="https://img.freepik.com/premium-photo/online-fashion-shopping-with-laptop_23-2150400630.jpg?size=626&ext=jpg&ga=GA1.1.1508452457.1681979051&semt=ais_user"
          alt=' fourth slide'
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Shop Online Anytime</h3>
          <p>Experience the convenience of online shopping from your home.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://img.freepik.com/free-photo/close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-with-white-shopping-bag-blue-pastel-background_1258-128519.jpg?size=626&ext=jpg&ga=GA1.1.1069217564.1721807531&semt=ais_user'
          alt='Fifth slide'
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Exclusive Offers</h3>
          <p>Enjoy exclusive deals and discounts on your favorite products.</p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  
 <br />


      <input id='search'
        type="text"
        value={searchText}
        onChange={e => updateSearchText(e.target.value)}
        placeholder="Search for products..."
      /> 
 <div>
<label htmlFor="products" className='label'>Choose a category:</label>

 <select name="products" id="products" className='select-dropdown' onChange={handleCategory}>
   {/* <option value="empty">select a category </option> */}
   <option value="all">All</option>
  <option value="men's clothing"  >Mens</option>
  <option value="women's clothing">Womens </option>
  <option value="electronics"><button type="button">Electronics</button></option>
  <option value ="jewelery">Jewelry</option>
</select> 
</div> <br />
      

      <div className="product-list" ref={productListRef} >

        {data.map((p) => (
          <div className="product" key={p.id}>
            <NavLink to={`./product/${p.id}`}>
              <img src={p.image} alt={p.title} height="250px" /></NavLink>
              
            <br /> <br /> 
            <div  id='title'>
           <p style={{ alignItems:'center',justifyContent:'center', color:'black'}}>{p.title .substring(0,25)}</p>
          
            <h6  style={{postion:'absolute',bottom:'-90px',textUnderline:'off',}}> <span style={{fontWeight:'bold'}}>just ₹</span>{p.price}</h6>
            </div>
            {/* <NavLink to={`./product/${p.id}`}><button id="buynow">BUY NOW</button></NavLink> */}
          </div>
        ))}
      </div> <br /> 
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
      
      {/* <div>{loading ? <Loading /> : <ShowProducts />}</div> */}
    </div>
  );
};

export default Home;
