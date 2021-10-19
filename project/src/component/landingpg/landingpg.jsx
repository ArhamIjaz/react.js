import React from 'react'
import './landingpg.css'
import {Link} from 'react-router-dom'
export default function landingpg() {
    return (
        <div className='first'>
            <div className='border p-5 rounded-pill'>
            <h1 className='display-5 text-center text-white'>WELCOME TO THE QUIZ</h1>
            <Link to='Questionpg'>
            <button className='btn btn-danger mt-5 ml-5'>MaKE THE QUIZ</button>
            </Link>
            <button className='btn btn-danger mt-5 ml-5'>START THE QUIZ</button>
            </div>
        </div>
    )
}
