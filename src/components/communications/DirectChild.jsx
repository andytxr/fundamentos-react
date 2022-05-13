import React from "react";
import If, { Else } from "../conditions/if";

export default function DirectChild(props){

    let nerd = props.nerd;

    return (

        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div><If condition={nerd}>
                    Verdadeiro
                    <Else>
                        Falso
                    </Else>
                </If>
            </div>
        </div>

    )

}