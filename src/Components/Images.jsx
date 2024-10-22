import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Images = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Images;
// {data.map((p)=>{
//   <div className='col-md-3 mb-4'> 
//   <div class ="card h-100 text-center p-4" key={p.id}>
//     <img src={p.image} class = " card-img-top" alt={p.title} height= "250px"/>
//     <div class="card-body">
//       <h5 class =" card-title mb-0"> {p.title}</h5>
//       <p class="card-text">$ {p.price}</p>
//        </div>

//      </div>
  
//   </div>
// })}

