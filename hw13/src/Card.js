import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="product">
      <img src={props.image} alt="Product"/>
      <h2>{props.name}</h2>
    </div>
  );
}

export default Card;