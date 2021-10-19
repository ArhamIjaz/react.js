import React from 'react'
import './nav.css'
import Img1 from '../../Images/Esports-PakistanLogo.png'
export default class nav extends React.Component{
    render(){
        return(
            <div className="nav">
                <div className="navsub1">
                    <div className="skew">
                        <div className="sub">
                            <ul className='ul1'>
                                <li>HOME</li>
                                <li>ABOUT US</li>
                                <li>ORGANIZERS</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navsub2">
                    <img src={Img1}/>
                </div>
                <div className="navsub1">
                <div className="skew s1">
                        <div className="sub s2">
                        <ul className='ul1 ul2'>
                                <li>BLOG</li>
                                <li>EVENTS</li>
                                <li>CONTACT US</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}