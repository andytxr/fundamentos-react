import React from "react";

export default function IndirectChild(props){

    let max = 45;
    let min = 30;

    let generateAge = () => parseInt(Math.ceil(Math.random() * (max - min) + min)); 

    return (

        <div>
            <div>Filho</div>
            <button onClick={ e => {props.whenClick('Deco', generateAge(), true); }}>Informação</button>
        </div>

    )

}