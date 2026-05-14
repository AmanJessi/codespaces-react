Import { useState } from 'react';
import './Productos.css';

function Productos() {
  const [carrito, setCarrito] = useState(0);

  return (
    <div className="container">
      <h2>Productos</h2>

      <div className="card">
        <h3>Chompa rosa</h3>
        <p>Bs. 120</p>
        <button onClick={() => setCarrito(carrito + 1)}>
          Agregar
        </button>
      </div>

      <div className="card">
        <h3>Pulsera tejida</h3>
        <p>Bs. 25</p>
        <button onClick={() => setCarrito(carrito + 1)}>
          Agregar
        </button>
      </div>

      <h3>Carrito: {carrito}</h3>
    </div>
  );
}

export default Productos;
