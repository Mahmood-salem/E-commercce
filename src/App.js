import logo from './logo.svg';
import './App.css';
import Navebar from './Componants/Navebar';
import Slider from './Componants/Slider';
import Productlist from './Componants/Productlist';
import { Route,Routes } from 'react-router-dom';
import { Fragment } from 'react';
import About from './Componants/About';
import Details from './Componants/Details';


function App() {
  return (
    <div className="App">

      <Navebar/>
      <Routes>
      <Route path='/' element={
        <Fragment>
        <Slider/>
      <Productlist/>
        </Fragment>
      }/>
      <Route path="about" element={
        <About/>
      }/>
      <Route path="product/:productId" element={
        <Details/>
      }/>

      </Routes>
    </div>
  );
}

export default App;
