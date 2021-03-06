import React, {useState} from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/effects.css';

export const Memorize = () => {

    const { counter, increment} = useCounter(10);
    const [show, setshow] = useState(true);
    return (
        <div>
            <h2>Counter: <Small value={counter}></Small></h2>
            <hr></hr>

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
