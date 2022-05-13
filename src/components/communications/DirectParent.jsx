import React from "react";
import DirectChild from './DirectChild'

export default function DirectParent(props){

    return(

        <div>
            <DirectChild name="Théo" age="11" nerd={false}></DirectChild>
            <hr></hr>
            <DirectChild name="Antoine" age="13" nerd={false}></DirectChild>
            <hr></hr>
            <DirectChild name="Elizabeth" age="7" nerd={true}></DirectChild>
        </div>
    )

}