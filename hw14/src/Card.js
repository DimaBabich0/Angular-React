import React from 'react';
import './Card.css';

const checkMark = <>&#9989;</>;
const crossMark = <>&#10060;</>;

function Card(props) 
{
  const {name, color, advantages, price } = props;

  return (
    <div className="product">
      <h2 className='name' style={{backgroundColor: color}}>{name}</h2>
      <p className='price'>${price}</p>
      <div className='advantages'>
        <p>{advantages[0] ? checkMark : crossMark} Simple Text Here</p>
        <p>{advantages[1] ? checkMark : crossMark} Simple Text Here</p>
        <p>{advantages[2] ? checkMark : crossMark} Simple Text Here</p>
        <p>{advantages[3] ? checkMark : crossMark} Simple Text Here</p>
      </div>
      <button style={{backgroundColor: color}}>Select package</button>
    </div>
  );
}
export default Card;
