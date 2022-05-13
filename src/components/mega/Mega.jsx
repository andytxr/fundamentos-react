import React, {useState} from "react";

import './Mega.css'

export default function Mega(props){

    function generateNumbers(qtd){

        let numbers = Array(qtd).fill(0).reduce((nums)=>{
    
            let newNum = doNotLetNumbersRepeat(1, 60, nums);
            return [...nums, newNum];
    
        }, []).sort((n1, n2)=> n1 - n2)

        return numbers
    
    }
    
    function doNotLetNumbersRepeat(min, max, array){
    
        let random = parseInt(Math.ceil(Math.random() * (max + 1 - min) + min));
    
        return array.includes(random) ? doNotLetNumbersRepeat(min, max, array) : random
    
    }

    let [qtd, setQtd] = useState(props.qtd || 6)
    let initNumbers = Array(qtd).fill(0)
    let [numbers, setNumbers] = useState(initNumbers);

    return (

        <div className="Mega">
            <h2>MEGA</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Quantidade de Números</label>
                <input min="6" max="15" type="number" value={qtd} onChange={e=> setQtd(+e.target.value)}/>
            </div>
            <br></br>
            <button onClick={e=>{setNumbers(generateNumbers(qtd))}}>Gerar Números</button>
        </div>

    )

}






