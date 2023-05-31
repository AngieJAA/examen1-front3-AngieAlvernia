import React from 'react';
import './card.css';

function Card({ nombre, apellido }) {
  return (
    <div className="card">
      <h2>Tarjeta de Información</h2>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
    </div>
  );
}

export default Card;
