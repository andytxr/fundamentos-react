import React from 'react';

export default function Random (props){

    let min=props.min;
    let max=props.max;

    if(min>max){

        let aux=min;
        min = max;
        max = aux;

    }

    let random = parseInt(Math.ceil(Math.random() * (max - min) + min));

    console.log(random);

    return(

        <div>
            <p>O número mínimo é: {min}, e o máximo é: {max} e o número escolhido entre os dois foi: {random}</p>
        </div>

    )  

}
