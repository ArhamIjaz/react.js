import React from 'react'
import {Link} from 'react-router-dom'
import './3rd page.css'
export default function page3({studentid,studentname}){
    return(
        <div className='new'>
        <h1 className='text-warning'>STUDENT LOGIN</h1>
        <input type='text' placeholder='enter student id' onChange={studentid}/>
        <input className='mt-2' type='text' placeholder='enter student name' onChange={studentname}/>
        <Link to='Page4'>
        <button className='btn btn-warning mt-2 '>Save</button>
        </Link>
        </div>
    )
}
