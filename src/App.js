import { useState } from 'react'
import './App.css'
import TodoContainer from './Components/TodoContainer'
import InputContainer from './Components/InputContainer'
function App() {
  const [inpval,setinpval]=useState("")
  const [todo,settodo]=useState([])
  function wtodo(e){
    setinpval(e.target.value)
  }
  function hclick(){
    if(inpval!=""){
      settodo(todo =>[...todo,inpval])
      setinpval("")
    }
  }
  function dclick(val){
    let b=todo.indexOf(val)
    const new1=[]
   for(var i=0;i<todo.length;i++){
    if(i!=b){
      new1.push(todo[i])
    }
   }
     
   settodo(new1)
   
  }


  
  return (
    <>
    <h1>To-Do List</h1>
    <InputContainer wtodo={wtodo} inpval={inpval} hclick={hclick}/>
    {
      todo.map((a)=>(<><TodoContainer a={a} dclick={dclick}/></>))
    }
      
    </>
  )
}

export default App