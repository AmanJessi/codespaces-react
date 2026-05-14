import { useState } from 'react'; // 'import' con minúscula
import './Productos.css';

function Productos() {
  const [carrito, setCarrito] = useState(0);

  // Función genérica para evitar repetir código
  const agregarAlCarrito = () => {
    setCarrito(prev => prev + 1);
  };

  return (
    <div className="container">
      <h2>Productos</h2>

      <div className="card">
        <h3>Chompa rosa</h3>
        <p>Bs. 120</p>
        <button onClick={agregarAlCarrito}>
          Agregar
        </button>
      </div>

      <div className="card">
        <h3>Pulsera tejida</h3>
        <p>Bs. 25</p>
        <button onClick={agregarAlCarrito}>
          Agregar
        </button>
      </div>

      <hr />
      <h3>Items en el carrito: {carrito}</h3>
    </div>
  );
}

export default Productos;
