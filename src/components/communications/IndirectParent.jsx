import React, { useState } from "react";
import IndirectChild from './IndirectChild'
import If,{ Else } from './../conditions/if'

export default function IndirectParent(props){

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    function getInfos(name, age, nerd){

        setName(name);
        setAge(age);
        setNerd(nerd)

    }

    return(

        <div>
            <div>
                <span> {name} </span>
                <span> {age} </span>
                <span>
                    <If condition={nerd}>
                        <strong> Verdadeiro </strong>
                        <Else>
                            <strong> Falso </strong>
                        </Else>
                    </If>
                </span>
            </div>
            <IndirectChild whenClick={getInfos}>
        
            </IndirectChild>
        </div>

    )

}