import { Fragment } from "react";
import Product from "./Product";
import { useEffect,useState } from "react";

function Productlist(){
    const [products, setproducts] =useState([]);
    const [categories, setcategories] =useState([]);

    const getProduct = ()=>{
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setproducts(data))
    }
       const getcategories = ()=>{
fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>setcategories(data))
    }
           const getProductCategories = (catName)=>{
            console.log(catName)
fetch(`https://fakestoreapi.com/products/category/${catName}`)
.then(res=>res.json())
            .then(json=>setproducts(json))
    }
    useEffect(()=>{
      getProduct();
        getcategories();
        
    },[])
   return(
<Fragment>
  <h1 className="text-center p-3"> Our Products</h1>
  <div className="container">
  <button  className="btn btn-info my-2" onClick={()=>{ getProduct();

    }}>All</button>
  {categories.map((cat)=>{

    return <button key={cat} className="btn btn-info my-3 mx-1" onClick={()=>{ getProductCategories(cat);

    }}>{cat}</button>
  
  })}
  <div className="row ">
  {products.map((product)=>{
    return (
<div className="col-md-6 col-sm-12 col-lg-3" key={product.id}>
  <Product product={product} showBtn={true}/>
</div>
    )
  })}
  
        
 </div>
  </div>
</Fragment>
   ); 
}

export default Productlist;
