import React from "react";

import First from './components/basics/First';
import Parameters from './components/basics/Parameters';
import Fragments from './components/basics/Fragments';
import Random from './components/basics/Random';
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";

import Card from './components/layout/Card';

import StudentList from "./components/repetition/StudentList";
import StuffTable from "./components/repetition/StuffTable";

import PairOrOdd from "./components/conditions/PairOrOdd";
import UserInfo from "./components/conditions/UserInfo";

import DirectParent from "./components/communications/DirectParent";
import IndirectParent from "./components/communications/IndirectParent";

import Input from "./components/forms/Input";

import Counter from "./components/counter/Counter";

import Mega from "./components/mega/Mega";

import './App.css';


export default () => (

    <div className="app">

        <div className="cards">

            <Card title=" #14 - Mega-Sena" color="#32a83a">
                <Mega></Mega>
            </Card>

            <Card title=" #13 - Counter" color="#ba323b">
                <Counter initNumber={0}></Counter>
            </Card>

            <Card title=" #12 - Controlled Component (Input)" color="#424242">
                <Input></Input>
            </Card>

            <Card title=" #11 - Indirect Communication" color="#ab7502">
                <IndirectParent></IndirectParent>
            </Card>

            <Card title=" #10 - Direct Communication" color="#33355c">
                <DirectParent></DirectParent>
            </Card>

            <Card title=" #9 - Conditional (User Info)" color="#0062a3">
                <UserInfo user={{

                    name: 'Deco'

                }}></UserInfo>
                <UserInfo></UserInfo>
            </Card>

            <Card title=" #8 - Conditional (Pair or Odd)" color="#d47fa9">
                <PairOrOdd num={33}></PairOrOdd>
            </Card>

            <Card title=" #7 - Repetition (Stuff Table)" color="#d44e69">
                <StuffTable></StuffTable>
            </Card>

            <Card title=" #6 - Repetition (Student List)" color="#7d0600">
                <StudentList></StudentList>
            </Card>

            <Card title=" #5 - Component with Childs" color="#513288">
                <Family lastname="Sawayama">
                    <FamilyMember name="Deco" />
                    <FamilyMember name="Gon" />
                    <FamilyMember name="Netty"/>
                </Family>
            </Card>

            <Card title=" #4 - Random" color="#999bf1">
                <Random max={7} min={1} />
            </Card>

            <Card title=" #3 - Fragments" color="#11e7e0">
                <Fragments />
            </Card>

            <Card title=" #2 - Parameters" color="#3660d1">
                <Parameters title="São Paulo " surname="Soberano" subtitle="6-3-3" country="brasileiro" mundial={3} />
            </Card>

            <Card title=" #1 - First Component">
                <First></First>
            </Card>

        </div>

    </div>

)

    


    

