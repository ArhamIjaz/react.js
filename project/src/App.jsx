import React,{useState} from 'react'
import { Route } from 'react-router'
import Landingpg from './component/landingpg/landingpg' 
import Questionpg from './component/questionpg/question'
import Questions from './component/questions/questions'
import Options from './component/options/options'
import Correct from './component/correct/correct'
import Quiz from './component/quiz/quiz'
import Quiz2 from './component/quiz2/quiz2'
import Quiz3 from './component/quiz3/quiz3'
let App=()=>{
    const [questions, setquestions] = useState("")
    let getquestions=(e)=>{
        setquestions(e.target.value)
    }
    console.log(questions);

    const [option1, setoption1] = useState("")
    let getoption1=(e)=>{
        setoption1(e.target.value)
    }
    console.log(option1);
    
    const [option2, setoption2] = useState("")
    let getoption2=(e)=>{
        setoption2(e.target.value)
    }
    console.log(option2);

    const [option3, setoption3] = useState("")
    let getoption3=(e)=>{
        setoption3(e.target.value)
    }
    console.log(option3);

    const [option4, setoption4] = useState("")
    let getoption4=(e)=>{
        setoption4(e.target.value)
    }
    console.log(option4);

    const [correctans, setcorrectans] = useState("")
    let getcorrectans=(e)=>{
        setcorrectans(e.target.value)
    }
    console.log(correctans);

    const [array, setarray] = useState([])
    let setinarray=()=>{
        let newarray=array
        var obj={questions,option1,option2,option3,option4,correctans}
        newarray.push(obj)
        setarray(newarray)   
    }
    console.log(array);

    const [totalQs, settotalQs] = useState(0)
    let gettotalQs=()=>{
        var total=totalQs
        settotalQs(total+1)
    }
    // console.log(totalQs);
return(
    <div>
        <Route exact path='/'>
            <Landingpg/>
        </Route>
        <Route  path='/Questionpg'>
            <Questionpg/>
        </Route>
        <Route  path='/Questions'>
            <Questions Q={getquestions}/>
        </Route>
        <Route  path='/Options'>
            <Options op1={getoption1} op2={getoption2} op3={getoption3} op4={getoption4}/>
        </Route>
        <Route  path='/Correct'>
            <Correct ans={getcorrectans} arry={setinarray} total={gettotalQs} totalQ={totalQs}/>
        </Route>
        <Route  path='/Quiz'>
            <Quiz arr1={array}/>
        </Route>
        <Route  path='/Quiz2'>
            <Quiz2 arr1={array}/>
        </Route>
        <Route  path='/Quiz3'>
            <Quiz3 arr1={array}/>
        </Route>
    </div>
)
}
export default App