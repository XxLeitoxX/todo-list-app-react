import React from 'react'

export const ShowIncrement = ({ increment }) => {

    console.log('Me volvi a generar :(');
    return (
        <div>
            
            <button
                className="btn btn-primary"
                onClick= {() => {
                    increment(5)
                }}
            >
                +1
            </button>
        </div>
    )
}
