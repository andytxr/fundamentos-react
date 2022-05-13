import React from "react";

export default function Step(props){

    return (

        <div>
            <label htmlFor="">  
            </label>
            <input id="stepInput" type="number" value={props.step} onChange={props.newStep}></input>
        </div>

    )

}