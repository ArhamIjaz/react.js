import React from 'react'
import {Link} from 'react-router-dom'
export default function page5({id,filtered}){
    return(
        <>
        <input type='text' placeholder='enter your student ID' onChange={id}/>
        <Link to='Page6'>
        <button className='btn btn-warning' onClick={filtered}>Check Result</button>
        </Link>
        </>
    )
}