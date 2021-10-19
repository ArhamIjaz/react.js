import React from 'react'
import {Link} from 'react-router-dom'
export default function page4({urdu,english,maths,physics,computer,arr}){
    return(
        <div className='new'>
         <h1 className='text-warning'>STUDENT MARKS</h1>
        <input type='text' placeholder='enter  Urdu marks' onChange={urdu}/>
        <input className='mt-2' type='text' placeholder='enter  Maths marks' onChange={maths}/>
        <input className='mt-2' type='text' placeholder='enter English marks' onChange={english}/>
        <input className='mt-2' type='text' placeholder='enter  Physics marks' onChange={physics}/>
        <input className='mt-2' type='text' placeholder='enter Computer marks' onChange={computer}/>
        <Link to='/'>
        <button className='btn btn-warning mt-2 ' onClick={arr}>Save</button>
        </Link>
        <Link to='Page3'>
        <button className='btn btn-warning mt-2 ' onClick={arr}>Add More</button>
        </Link>
        </div>
    )
}
