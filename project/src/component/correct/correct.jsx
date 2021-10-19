import React from 'react'
import {Link} from 'react-router-dom'
export default function correct({ans,arry,total,totalQ}) {
    return (
        <div>
              <div className="container one">
            <Link to='Questions'>
                <button className='btn btn-warning  rounded-pill fs-1' onClick={total}>+</button>
            </Link>
            <Link to='Quiz'>
                <button className='btn btn-warning  rounded-pill'>Start The Quiz</button>
            </Link>
            </div>
            <div className="container mt-2 ">
            <h5 className='display-6 text-white'>1. Add the Question</h5>
            <input type='text' className='w-25' placeholder='Question'/>
            <br/>
            <Link to='Options'>
            <button className='btn btn-warning mt-3'>Options</button>
            </Link>
            <h5 className='display-6 text-white mt-3'>2. Add the Options</h5>
            <input type='text' className='w-25' placeholder='1.'/>
            <br/>
            <input type='text' className='w-25 mt-3' placeholder='2.'/>
            <br/>
            <input type='text' className='w-25 mt-3' placeholder='3.'/>
            <br/>
            <input type='text' className='w-25 mt-3' placeholder='4.'/>
            <br/>
            <Link to='Options'>
            <button className='btn btn-warning mt-3'>Enter the Correct Option</button>
            </Link>
            <h5 className='display-6 text-white mt-3'>3. Add the Correct Option<span className="ml-5 pl-5"> Total Question:{totalQ}</span></h5>
            <input type='text' className='w-25 mt-3' placeholder='Correct Option' onChange={ans}/>
            <br/>
            <Link>
            <button className='btn btn-warning mt-3' onClick={arry}>Save</button>
            </Link>
           
            </div>
        </div>
    )
}
