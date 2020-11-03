import React, { useState, useCallback } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';


export const CallBackHook = () => {


    const [counter, setcounter] = useState(10);

    /*const increment = () => {
        setcounter(counter + 1);
    }*/

    const increment = useCallback( (num) => {
        setcounter(c => c + num);
    },
      [setcounter]  
    ) 

    return (
        <div>
            <h2>useCallBack : { counter }</h2>
            <hr/>
             
            <ShowIncrement increment = { increment }/>
        </div>
    )
}
