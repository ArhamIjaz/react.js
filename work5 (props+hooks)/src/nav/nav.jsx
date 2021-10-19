import React from 'react'
import './nav.css'
let Nav=(props)=>{
    return(
        <div >
           <h1>{props.number}</h1>
            <button onClick={props.btn}>Increase</button>
            <button onClick={props.btn2}>Decrease</button>
            <button onClick={props.btn3}>Reset</button>
        </div>
    )
    
    
}
export default Nav

