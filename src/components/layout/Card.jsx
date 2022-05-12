import React from "react";

import './Card.css';

export default function Cards(props){

    let style = {

        backgroundColor: props.color || '#77e890 ',
        borderColor: props.color || '#77e890 '

    }

    return(
        <div className="card" style={style}>
            <div className="title">{props.title}</div>

            <div className="content">
                {props.children}
            </div>
        </div>
    ) 

}