import React from "react";

export default function Parameters(props){

    const subtitle = props.subtitle;
    const status = props.mundial < 3 ? 'Pequeno!' : 'Grande!';

    return (

        <div>
            <h2>{props.title} é o {props.surname}</h2>
            <h3>{subtitle}! é um clube {props.country} com {props.mundial} mundial(is)!</h3>

            <p>O {props.title} é {status}</p>
        </div> 

    )

}