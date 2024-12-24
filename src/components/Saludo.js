import { useState } from 'react';

function Saludo(props) {
    const [contador, setContador] = useState(0);


    return (
        <div>
            <h1>¡Hola, {props.nombre}!</h1>
            <p>Has hecho clic {contador} veces</p>
            <button onClick={() => setContador(contador + 1)}>
                ¡Haz clic aquí!
            </button>
        </div>
    );
}

export default Saludo;