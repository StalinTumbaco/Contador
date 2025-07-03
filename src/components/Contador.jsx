//Crea aqui tu componente Contador
import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', marginBottom: '20px'}}>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default Contador;
