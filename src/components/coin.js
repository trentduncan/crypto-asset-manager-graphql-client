import React from 'react';

export default function Coin(props) {
  return (
      <li name={props.name}>
          {props.symbol} {props.change24h}% {props.amount ? `Quantity: ${props.amount}`: ''}
      </li>
  );
} 