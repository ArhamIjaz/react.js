import React from 'react'
import './end.css'

export default class End extends React.Component{
    render(){
        return(
            <div className="cont">
                <img src={this.props.src}/>
            </div>
        )
    }
}