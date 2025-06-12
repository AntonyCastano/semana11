import React from 'react';

function Usuario({ nombre = "Invitado", apellido = "Anónimo" }) {
  return (
    <ul>
      <li>Nombre: {nombre}</li>
      <li>Apellido: {apellido}</li>
    </ul>
  );
}

export default Usuario;
