import React from "react";

import Buttons from "./Buttons";
import Display from "./Display";
import Step from "./Step";

export default class Counter extends React.Component{

    state = {

        num: this.props.initNumber || 0,
        step: this.props.initStep || 1

    }

    add = () => {

        this.setState({

            num:this.state.num + this.state.step

        })

    }

    dec = () => {

        this.setState({

            num:this.state.num - this.state.step

        })

    }

    setStep = (e) => {

        this.setState({
            step: +e.target.value
        })

    }

    render(){

        return(

            <div>
                <h2>Counter</h2>
                <Display num={this.state.num}></Display>
                <Step step={this.state.step} newStep={this.setStep}></Step>
                <Buttons add={this.add} dec={this.dec}></Buttons>
            </div>

        )
    }
}