import React from 'react'
import './body2.css'
import Image1 from '../../Images/h1-img-1-1.png'
import Btn from 'react-bootstrap/Button'
export default class Body2 extends React.Component{
    render(){
        return(
            <div className="body2 pt-1">
                <h1 className='text-white text-center mt-5 h1'>LIVE STREAMS</h1>
                <div className="container w-25 hr mt-3"></div>
                <div className="box mt-5 d-flex">
                    <img src={Image1}/>
                    <div className="box2">
                        <h1 className='text-white mt-5'>PRO-LEAGUE 03: EVENT FOR<br/> GAMERS BY GAMERS</h1>
                        <Btn className=' mt-3 p-3 bg-danger border border-transparent'>COMING SOON</Btn>
                    </div>
                </div>
            </div>
        )
    }
}