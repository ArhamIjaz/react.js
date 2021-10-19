import React from 'react'
import {Link} from 'react-router-dom'
import './question.css'
export default function question() {
    return (
        <div>
            <div className="container one">
            <Link to='Questions'>
                <button className='btn btn-warning  rounded-pill fs-1'>+</button>
            </Link>
            <Link to='Quiz'>
                <button className='btn btn-warning  rounded-pill'>Start The Quiz</button>
            </Link>
            </div>
        </div>
    )
}
