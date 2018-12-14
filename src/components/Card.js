import React from 'react';

const Card = (props) => (
  <div className="card">
    <h1>{props.title}</h1>
    <ul>
      <li>{props.bullet1}</li>
      <li>{props.bullet2}</li>
      <li>{props.bullet3}</li>
    </ul>
  </div>
);
export default Card;
