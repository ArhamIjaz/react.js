import React from 'react'
import Data from "./data"
import './style.css'
export default class App extends React.Component
{   
    state={
        data:Data
    }

    render(){
        let showdata=this.state.data.map((e)=>{
            console.log(e);
            return(
                <div>
                    <div className="header">
                        <h1>{e.name}</h1>
                        <h3>{e.prof}</h3>
                    </div>
                    <div className="flex">
                        <div className="one">
                            <img src={e.img}/>
                            <h4>CONTACTS</h4>
                            <ul className="ul2">
                                <li><i class="fas fa-phone-square-alt"></i> {e.ph}</li>
                                <li><i class="far fa-envelope"></i> {e.email}</li>
                                <li><i class="fab fa-facebook-f"></i> {e.fb}</li>
                                <li><i class="fas fa-map-marker-alt"></i> {e.place}</li>
                            </ul>
                            <h4>TECHNICAL SKILLS</h4>
                            <div>
                                <div className="circle rounded-pill d-flex justify-content-center align-items-center">
                                    <i class="fab fa-product-hunt text-white fs-1"></i>
                                </div>
                                <div className="circle rounded-pill  d-flex justify-content-center align-items-center">
                                <i class="fas fa-bezier-curve text-white fs-1"></i>
                                </div>
                                <div className="circle rounded-pill  d-flex justify-content-center align-items-center">
                                <i class="fab fa-mixer text-white fs-1"></i>
                                </div>
                                <div className="circle rounded-pill  d-flex justify-content-center align-items-center">
                                <i class="fas fa-portrait text-white fs-1"></i>
                                </div>
                                <div className="circle rounded-pill  d-flex justify-content-center align-items-center">
                                <i class="fas fa-gem text-white fs-1"></i>
                                </div>
                                <div className="circle rounded-pill  d-flex justify-content-center align-items-center">
                                <i class="fas fa-pencil-ruler text-white fs-1"></i>
                                </div>
                            </div>
                        </div>
                        <div className="two">
                            <h4 className="head1">EDUCATION</h4>
                            <p>{e.edu}</p>
                            <hr/>
                            <h4 className="head1">LANGUAGES</h4>
                            <ul className="ul1">
                                <li>{e.lang1}</li>
                                <li>{e.lang2}</li>
                                <li>{e.lang3}</li>
                            </ul>
                            <hr/>
                            <h4 className="head1">PROFESSIONAL SKILLS</h4>
                            <ul className="ul1">
                                <li>{e.Profskil1}</li>
                                <li>{e.Profskil2}</li>
                                <li>{e.Profskil3}</li>
                                <li>{e.Profskil4}</li>
                                <li>{e.Profskil5}</li>
                            </ul>
                            <hr/>
                            <h4 className="head1">PERSONAL SKILLS</h4>
                            <ul className="ul1">
                                <li>{e.Perskill1}</li>
                                <li>{e.Perskill2}</li>
                                <li>{e.Perskill3}</li>
                                <li>{e.Perskill4}</li>
                            </ul>
                            <hr/>
                            <h4 className="head1">WORK EXPERIENCE</h4>
                            <div className="ul1">
                                <li>{e.Workexp1}<p className='para'>{e.exp1}</p></li>
                                <li>{e.Workexp2}<p className='para'>{e.exp2}</p></li>
                                <li>{e.Workexp3}<p className='para'>{e.exp3}</p></li>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <>
            {showdata}
            </>
        )   
        
    }
}