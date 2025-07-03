//Crea aqui tu componente Contador
import { useState } from 'react';

function Contador({ titulo, inicio }) {
  const [contador, setContador] = useState(inicio);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
        <h2>{titulo}</h2>
        <p>Valor actual: {contador}</p>
        <button onClick={incrementar}>+1</button>
        <button onClick={decrementar}>-1</button>
    </div>
  );
}

export default Contador;