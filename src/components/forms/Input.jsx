import React, { useState } from "react";

import './Input.css'

export default function Input (props){

    const [value, setValue] = useState('X')

    function whenChange(e){

        setValue(e.target.value)

    }

    return(

        <div className="input">
            <h2>{value}</h2>
            <div>
                <input value={value} onChange={whenChange}/>
            </div>
        </div>

    )

}