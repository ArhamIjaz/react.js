import React from 'react'
import './counter.css'
export default class Counter extends React.Component{
    state=
    {
        x:0
    }
    inc=()=>{
        var y=this.state.x
        y++
        this.setState({
            x:y
        })
    }
    dec=()=>{
        var z=this.state.x
        z--
        this.setState({
            x:z
        })
    }
    res=()=>{
        this.setState({
            x:0
        })
    }



    render(){
        return(
            <div className="main">
                <h1>Counter</h1>
                <br/>
                <h1>{this.state.x}</h1>
                <button className="btn1" onClick={this.inc}>Inc</button>
                <button className="btn2" onClick={this.dec}>Dec</button>
                <button className="btn3" onClick={this.res}>Reset</button>
            </div>
        )
    }
}