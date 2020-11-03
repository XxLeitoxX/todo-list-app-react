import React, {useState, useMemo} from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment} = useCounter(5000);
    const [show, setshow] = useState(true);
    
    const procesoPesado =  (interaciones) => {

        for (let index = 0; index < interaciones; index++) {
            console.log("Ahi vamos....");
        }

        return `${interaciones} iteraciones realizadas.`;
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memo Hook</h1>
            <h2>Counter: <small>{counter}</small></h2>
            <hr></hr>
            <p>{ memoProcesoPesado }</p>
            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button 
                className="btn btn-outline-primary ml-3"
                onClick={ () =>{
                    setshow( !show );
                }}
            >
                Show/Hide { JSON.stringify(show)}
            </button>
        </div>
    )
}
