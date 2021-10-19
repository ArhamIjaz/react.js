import React from 'react'
import './body.css'
export default class Body1 extends React.Component{
    render(){
        return(
            <div className="body pt-1 pb-3">
                <div className="container w-50 ">
                    <h1 className='text-white text-center mt-5 h1'>ALL <span className='text-danger'>PAKISTAN</span> ESPORTS <br/> TOURNAMENT</h1>
                    <div className="container w-25 hr mt-3"></div>
                    <p className="text-secondary mt-4 text-center">esports Pakistan (ESPK) is a consistently growing E-Gaming organization. With first Gaming Arena in Royal Palm Lahore, ESPK aims in putting up a great show. Becoming a norm in Pakistan, we as sports psychologists believe in bringing male and female, old and young, all together for desktop-based and other console games.</p>
                    <p className="text-secondary mt-4 text-center">In Pakistan, along with traditional sports, over the past year, more than 3000 paying members (players) are involved in esports activities. These are the paying members of the local area and support their communities.</p>
                    <p className="text-secondary mt-4 text-center">Our aim is to develop Gaming as a profession by introducing Esports. Youth is being made to unite as high school gaming club formation. Along with that, ESPK is providing the high school youth to unite in this in-house gaming platform.</p>
                </div>
            </div>
        )
    }
}