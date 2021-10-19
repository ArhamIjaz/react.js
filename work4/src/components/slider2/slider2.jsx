import React from 'react'
import './slider2.css'
import Btn from 'react-bootstrap/Button'
export default class Slider2 extends React.Component{
    render(){
        return(
            <div className=" a d-flex ">
                <div className="set2">
                    <div className="container">
                        <Btn>esports</Btn>
                        <h4 className='text-white mt-3'>ALL PAKISTANI TEKKEN7<br/>/FIFA 18 TOURNAMENT</h4>
                        <p className='text-white mt-3'><i class="far fa-calendar-alt text-white mr-2"></i> September 8, 2018</p>
                    </div>
                </div>
                <div className="set2 set3">
                <div className="container">
                        <Btn>esports</Btn>
                        <h4 className='text-white mt-3'>ESPORTS PRO LEAGUE &<br/>COSPLAY</h4>
                        <p className='text-white mt-3'><i class="far fa-calendar-alt text-white mr-2"></i> November 4, 2018</p>
                    </div>
                </div>
                <div className="set2 set4">
                <div className="container">
                        <Btn>esports</Btn>
                        <h4 className='text-white mt-3'>LEAGUE OF LEGENDS-<br/>ESPORTS PAKISTANI PRO-<br/>LEAGUE </h4>
                        <p className='text-white mt-3'><i class="far fa-calendar-alt text-white mr-2"></i> November 4, 2018</p>
                    </div>
                </div>
                <div className="set2 set5">
                <div className="container">
                        <Btn>esports</Btn>
                        <h4 className='text-white mt-3'>E-SPORTS PRO LEAGUE <br/>02</h4>
                        <p className='text-white mt-3'><i class="far fa-calendar-alt text-white mr-2"></i> February 22, 2019</p>
                    </div>
                </div>
            </div>
        )
    }
}