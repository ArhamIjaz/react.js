import React,{useState} from 'react'
import { Route } from 'react-router'
import Page1 from './component/1st page/1st page'
import Page2 from './component/2nd page/2nd page'
import Page3 from './component/3rd page/3rd page'
import Page4 from './component/4th page/4th page'
import Page5 from './component/5th page/5th page'
import Page6 from './component/6th page/6th page'
let App =()=>{
    const [State, setState] = useState()

    let AdminPass =(e)=>{
        setState(
            e.target.value
        )
       
        // console.log(State);
    }
    const [studentid, setstudentid] = useState("")
    const [studentname, setstudentname] = useState("")

    let getstudentid =(e)=>{
        setstudentid(
            e.target.value
        )
       
        // console.log(studentid);
    }
    let getstudentname =(e)=>{
        setstudentname(
            e.target.value
        )
       
        // console.log(studentname);
    }
    const [urdu, seturdu] = useState("")
    const [english, setenglish] = useState("")
    const [maths, setmaths] = useState("")
    const [physics, setphysics] = useState("")
    const [computer, setcomputer] = useState("")
    
    let urdumarks =(e)=>{
        seturdu(
            e.target.value
        )
       
        // console.log(studentname);
    }
    let englishmarks =(e)=>{
        setenglish(
            e.target.value
        )
       
        // console.log(studentname);
    }
    let mathmarks =(e)=>{
        setmaths(
            e.target.value
        )
       
        // console.log(studentname);
    }
    let computermarks =(e)=>{
        setcomputer(
            e.target.value
        )
       
        // console.log(studentname);
    }
    let physicsmarks=(e)=>{
        setphysics(
            e.target.value
        )
       
        // console.log(studentname);
    }
    const [array, setarray] = useState([])
    let storeinarray=()=>{
        let newarr=array
        var obj={studentid,studentname,urdu,maths,physics,computer,english}
        newarr.push(obj)
        setarray(newarr)
    }
    console.log(array);

    const [checkstudentid, setcheckstudentid] = useState("")
    let studentlogin=(e)=>{
        setcheckstudentid(
            e.target.value
        )
        console.log(checkstudentid);
    }
    const [result, setresult] = useState([])
    let filterstudentdata=()=>{
        var filter=array.filter(data=>data.studentid==checkstudentid)
        setresult(filter)
        // console.log(filter);  
    }
    console.log(result);
return(
    <>
    <Route exact path="/" component={Page1}/>
    <Route path="/Page2" component={Page2} >
        <Page2 Pass={AdminPass} statevalue={State} />
    </Route>
    <Route path="/Page3" component={Page3}>
        <Page3 studentid={getstudentid} studentname={getstudentname}/>
    </Route>
    <Route path="/Page4" component={Page4}>
        <Page4 urdu={urdumarks} english={englishmarks} maths={mathmarks} physics={physicsmarks} computer={computermarks} arr={storeinarray}/>
    </Route>
    <Route path="/Page5" component={Page5}>
        <Page5 id={studentlogin} filtered={filterstudentdata}/>
    </Route>
    <Route path="/Page6" component={Page6}>
        <Page6 result1={result}/>
    </Route>
    </>
)
}
export default App