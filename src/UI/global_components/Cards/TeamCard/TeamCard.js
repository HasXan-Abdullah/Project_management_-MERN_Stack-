import React from 'react'
import './card.css';
import pic from "../../../../assets/images/1.png";
const TeamCard = () => {
  return (
    
      <div className="col">
<div className="card" >
  <img src={pic} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">John Doe</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn">Know More</a>
  </div>
</div>
      </div>
 
  );
}

export default TeamCard