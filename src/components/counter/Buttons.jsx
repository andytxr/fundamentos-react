import React from "react";

export default function Buttons(props){

    return(

        <>
            <button onClick={props.add}>+</button>
            <button onClick={props.dec}>-</button>
        </>
        
    )

}