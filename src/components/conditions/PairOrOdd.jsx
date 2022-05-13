import React from "react";

export default function PairOrOdd(props){

    const isPar = props.num % 2 ===0

    return(

        <div>
            {isPar ? <span>Par</span> : <span>Ímpar</span>}
        </div>

    )

}