import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ {description}, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmint = (e) =>{
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        handleAddTodo(newTodo);
        reset();
        
    }

    return (
        <>
            <h4>Agregar TODO</h4>
                    <hr></hr>
                    <form onSubmit={handleSubmint}>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
        </>
    )
}
