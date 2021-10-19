import React,{useState} from 'react'
import Nav from './nav/nav'
export default function App (){
    let [num,setnum]=useState(0)
    // console.log(num);
    function inc(){
        setnum(num + 1)
    }
    function dec(){
        setnum(
            num -1
            
        )
    }
    function res(){
        setnum(
            num = 0
        )
    }
    
    return(
        <div>
        <Nav number={num} btn={inc} btn2={dec} btn3={res}/>
      
        
        </div>
       
    )
}