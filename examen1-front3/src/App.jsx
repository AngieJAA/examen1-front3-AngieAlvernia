import React, { useState } from 'react';
import Card from './Card';
import './App.css'

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3 || nombre.trim() !== nombre) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (apellido.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setError('');
    setShowCard(true);
  };

  return (
    <div className='formulario'>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Apellido:
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Enviar</button>
      </form>
      {showCard && <Card nombre={nombre} apellido={apellido} />}
    </div>
  );
}

export default App;
