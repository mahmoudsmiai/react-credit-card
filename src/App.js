import React from 'react';
import Puce from './ID-Puce.jpg';
import Image from './images.jpg';
import'./App.css';


function App() {
    return ( <div className = "App" >
    
<div className="container">
  <div>
  <h3 className="h3-card">CREDIT CARD</h3>
  </div>
  <div>
  <img  className="logo-puce" src={Puce}/> 
  </div>
  <div>
  <h3 className="num-card">1254876598585</h3>
  </div>
  <div className="footer-card">
    <div className="main-footer">
  <h2 className="h2-card">5422</h2>
  <h4 className="title">CARDHOLDER</h4>
  </div>
  <h6 className="valid">VALID THRU</h6>
  <img  className="logo" src={Image}/>
  </div>







</div>

        
  
        </div >
    )
}

export default App;