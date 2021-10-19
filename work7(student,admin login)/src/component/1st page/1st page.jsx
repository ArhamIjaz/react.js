import React from 'react'
import {Link} from 'react-router-dom'
import './1st page.css'
export default function page1(){
    return(
        <div>   
        <Link to="Page2">
        <button className='btn btn-warning  '>Admin</button>
        </Link>
        <Link to="Page5">
        <button className='btn btn-warning ml-2'>Result</button>
        </Link>
        </div>
    )
}