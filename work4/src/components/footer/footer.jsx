import React from 'react'
import './footer.css'
import Img from '../../Images/LOL.png'
export default class footer extends React.Component{
    render(){
        return(
            <div className="footer pt-1 pb-5">
                <h1 className='text-white text-center mt-5 h1'>UPCOMING EVENTS</h1>
                <div className="container w-25 hr mt-3"></div>
                <div className="container d-flex justify-content-center">
                    <img src={Img}/>
                </div>
            </div>
        )
    }
}