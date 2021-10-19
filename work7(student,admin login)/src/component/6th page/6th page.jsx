import React from 'react'
import {Link} from 'react-router-dom'
export default function page6({result1}){
    return(
        
        <div className="new">
        <h1 className='text-warning display-5'>Result Card</h1>
        <ul className='text-warning fs-4'>
            <li>Student Name:<span className='ml-2 text-danger'>{result1[0].studentname}</span></li>
            <li>Student ID:<span className='ml-2 text-danger'>{result1[0].studentid}</span></li>
            <li>Urdu Marks:<span className='ml-2 text-danger'>{result1[0].urdu}</span></li>
            <li>Maths Marks:<span className='ml-2 text-danger'>{result1[0].maths}</span></li>
            <li>English MArks:<span className='ml-2 text-danger'>{result1[0].english}</span></li>
            <li>Physics MArks:<span className='ml-2 text-danger'>{result1[0].physics}</span></li>
            <li>Computer MArks :<span className='ml-2 text-danger'>{result1[0].computer}</span></li>
        </ul>
        <Link to='Page5'>
        <button className='btn btn-warning '>Back</button>
        </Link>
        </div>
    )
}