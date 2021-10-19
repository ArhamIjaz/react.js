import React from 'react'
import {Link} from 'react-router-dom'
export default function page2({Pass,statevalue}){
    return(
        <>
        <input type='text' onInput={Pass}/>
        {statevalue==="sopranos" &&  <Link to='Page3'>
        <button className='btn btn-warning '>Login</button>
        </Link>}
        {statevalue!=="sopranos" && <button className='btn btn-warning '>Enter your password</button>}
       
        </>
    )
}