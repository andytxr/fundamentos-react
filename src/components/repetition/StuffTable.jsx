import React from "react";

import './StuffTable.css'
import stuffs from './../../data/stuffs';

export default function StuffTable(props){

    let stuffsLi = stuffs.map(stuffs =>{

        return (

            <tr key={stuffs.id}>
                <td className="id">{stuffs.id}</td>
                <td>{stuffs.name}</td>
                <td>{stuffs.price}</td>
            </tr>

        )

    })

    return(

        <div>
            <table className="table">
                <tr>
                    <th className="id">ID</th>
                    <th className="info">Name</th>
                    <th className="info">Price</th>
                </tr>
                    {stuffsLi}
            </table>
        </div>


    )

}