import { Fragment } from "react";
import imge1 from './imgs/1-.jpg'
import imge2 from './imgs/eCommerce-Website-Components-photo.jpg'
import imge3 from './imgs/download (1).jfif'
import './slider.css'
function Slider(){
   return(
<Fragment>
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imge1} className="d-block w-100 h" alt="imge1"/>
    </div>
    <div className="carousel-item">
      <img src={imge2} className="d-block w-100 h" alt="imge2"/>
    </div>
    <div className="carousel-item">
      <img src={imge3} className="d-block w-100 h" alt="imge3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</Fragment>
   ); 
}

export default Slider;