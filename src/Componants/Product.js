import { Fragment } from "react";
import './product.css'
import { Link } from "react-router-dom";

function Product(props){
  console.log(props)
   return(
<Fragment>
  <div className="card mb-3 px-2" >
  <img src={props.product.image} className="card-img-top hight mb-2" alt={props.product.title}/>
  <div className="card-body">
  {props.showBtn ? <h5 className="card-title my-2">{props.product.title}</h5>
  : <div> <h5 className="card-title my-2">{props.product.title}</h5>
  <p className="my-2">{props.product.description}</p></div>

}
   
{props.showBtn ? <div className="d-flex justify-content-between align-items-end  mt-2"> <Link to={`/product/${props.product.id}`} className="btn btn-primary">details</Link>
<h4 className="text-success">{props.product.price} <sup><b>$</b></sup></h4> 

</div> : <div className="d-flex justify-content-between align-items-end  mt-2"> 
<h5 className="text-success">Price : {props.product.price} <sup><b>$</b></sup></h5> <Link to={`/product/${props.product.id}`} className="btn btn-warning text-white fw-semibold">add to Cart</Link>

</div>

}
    
  </div>
</div>
</Fragment>
   ); 
}

export default Product;
