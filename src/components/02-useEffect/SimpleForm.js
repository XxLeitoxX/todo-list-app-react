import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name,email } = formState;

    /*useEffect( () => {
        console.log('Hey!');
    }, []); --> se dispara una vez al cargar con el arreglo vacio*/

    useEffect( () => {
        
    }, []);

    useEffect( () => {
        
    }, [formState]); /** Se dispara cuando cambia el form */


    useEffect( () => {
        
    }, [email]); /* Se dispara cuando cambia el email*/ 

    const handleInputChange = ({ target }) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value,
            [target.email]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tú nombre"
                    autoComplete="off"
                    value={ name }
                    onChange= { handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@example.com"
                    autoComplete="off"
                    value={ email }
                    onChange= { handleInputChange }
                />
            </div>

            { (name === '123') && <Message />}
        </>
    )
}
