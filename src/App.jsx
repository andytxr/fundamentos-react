import React from "react";

import First from './components/basics/First';
import Parameters from './components/basics/Parameters';
import Fragments from './components/basics/Fragments';
import Random from './components/basics/Random';
import Card from './components/basics/layout/Card';

import './App.css';

export default () => {

    return(

        <div className="app">

            <div className="cards">

                <Card title=" #4 - Random" color="#999bf1">
                    <Random max={7} min={1}/>
                </Card>

                <Card title=" #3 - Fragments" color="#11e7e0">
                    <Fragments/>   
                </Card>

                <Card title=" #2 - Parameters" color="#3660d1">
                    <Parameters title="São Paulo " surname="Soberano" subtitle="6-3-3" country="brasileiro" mundial={3}/>
                </Card>
                
                <Card title=" #1 - First Component">
                    <First></First>
                </Card>

            </div>

        </div>

    );
    
}

    


    

