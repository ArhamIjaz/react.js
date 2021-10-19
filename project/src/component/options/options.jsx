import React from 'react'
import {Link} from 'react-router-dom'
export default function options({op1,op2,op3,op4}) {
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
            <div className="container mt-2">
            <h5 className='display-6 text-white'>1. Add the Question</h5>
            <input type='text' className='w-25' placeholder='Question'/>
            <br/>
            <Link to='Options'>
            <button className='btn btn-warning mt-3'>Options</button>
            </Link>
            <h5 className='display-6 text-white'>2. Add the Options</h5>
            <input type='text' className='w-25' placeholder='1.' onChange={op1}/>
            <br/>
            <input type='text' className='w-25 mt-3' placeholder='2.' onChange={op2}/>
            <br/>
            <input type='text' className='w-25 mt-3' placeholder='3.' onChange={op3}/>
            <br/>
            <input type='text' className='w-25 mt-3' placeholder='4.' onChange={op4}/>
            <br/>
            <Link to='Correct'>
            <button className='btn btn-warning mt-3'>Enter the Correct Option</button>
            </Link>
            </div>
        </div>
    )
}
