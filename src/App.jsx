import React from "react";

import First from './components/basics/First'
import Parameters from './components/basics/Parameters'
import Fragments from './components/basics/Fragments'

export default function App(props){
    return(

        <div id="app">

            <Fragments/>    
            <Parameters title="São Paulo " surname="Soberano" subtitle="6-3-3" country="brasileiro" mundial={3}/>
            <Parameters title="Real Madrid" surname="Merengue" country="espanhol" subtitle="37-13-6" mundial={6}/>
            <Parameters title="Chelsea" surname="Blue" subtitle="7-2-1" country="inglês" mundial={1}/>
            <First></First>

        </div>

    )
    

}