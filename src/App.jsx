import { useState } from 'react' //  useState works as a hooker 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
//  function increasesCount(){
//   count=count+1
//   console.log("working")
//  }
//  function  decreaseCount(){
//   count=count-1
//  }

let [count,setCount]   = useState(0); 

function increasesCount(){
 if(count== 20){
  setCount(count);
  alert("value reached it's maximum point ");
 }
 else{
  count=count+1;
  setCount(count);
 }
}

function decreaseCount(){
  if(count == 0){
    setCount(count)
    alert("value will be negative")
  }
  else{
  count=count-1;
  setCount(count);
  }
}


  return (
    <>
      <h3>  Hey my name is Ayush </h3>
      <p> countter value  is : {count}</p>
      <button  onClick={increasesCount}> INCREASE</button>
      <br/>
      <button  onClick={decreaseCount}> DECREASE</button>
    </>
  )
}

export default App
