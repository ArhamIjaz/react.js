import React from 'react'
import './slider.css'
import Image1 from '../../Images/Mizo-1.png'
import Image2 from '../../Images/Softnix-1.png'
import Image3 from '../../Images/Tc-1.png'
import Image4 from '../../Images/fm91-1.png'
import Image5 from '../../Images/animetees-1.png'
export default class Slider extends React.Component{
    render(){
        return(
            <div className="slide1">
                <div className="container  d-flex ">
                    <div className="set1">
                        <img src={Image1}/>
                    </div>
                    <div className="set1">
                    <img src={Image2}/>
                    </div>
                    <div className="set1">
                    <img src={Image3}/>
                    </div>
                    <div className="set1">
                    <img src={Image4}/>
                    </div>
                    <div className="set1">
                    <img src={Image5}/>
                    </div>
                </div>
            </div>
        )
    }
}