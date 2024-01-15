import { Fragment, useEffect, useState } from "react";
import './product.css'
import { useParams, Link } from "react-router-dom";
import Product from "./Product";
import './details.css'

function Details(){
    const apiUrl= "https://fakestoreapi.com/products";
    const [product, setproduct] = useState({});

  const params = useParams();
  useEffect(()=>{
    fetch(`${apiUrl}/${params.productId}`)
            .then(res=>res.json())
            .then(product=>setproduct(product))
  },[])
  console.log(product)
   return(
<Fragment>



<div className="card mb-3 w-50 m-auto border-0 mt-5 shadow" >
  <div className="row g-0">
    <div className="col-md-4 row justify-content-center ">
      <img src={product.image} className="img-fluid details-img rounded-start " alt={product.title}/>
    </div>
    <div className="col-md-8">
      <div className="card-body px-4">
        <h5 className="card-title mb-2 mt-1">{product.title}</h5>
        <p className="card-text my-2">{product.description}</p>
        <div className="d-flex justify-content-start gap-5 align-items-center  mt-4"> 
<h5 className="text-success tex-bg-white shadow  p-2 rounded ">Price : {product.price} <sup><b>$</b></sup></h5> <Link to={`/product/${product.id}`} className="btn btn-warning text-white fw-semibold shadow">add to Cart</Link>

</div>
      </div>
    </div>
  </div>
</div>
  
</Fragment>
   ); 
}

export default Details;
