import React, { useState } from 'react';

const Contador = () => {
// Estado para almacenar el valor del contador
const [contador, setContador] = useState(0);

// Manejar el evento de incremento
const incrementar = () => {
setContador(contador + 1);
};

// Manejar el evento de decremento
const decrementar = () => {
setContador(contador - 1);
};

return (
<div>
<h2>Contador: {contador}</h2>
<button onClick={incrementar}>Incrementar</button>
<button onClick={decrementar}>Decrementar</button>
</div>
);
};

export default Contador;