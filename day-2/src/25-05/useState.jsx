import { useState } from "react";

function UseState(){
    const[counter,setCounter]=useState(1);
    const[counter2,setCounter2]=useState(10);
    console.log("Counter: ",counter);

    function increment(){
        // console.log("Inside function")
        setCounter((preValue)=>preValue+1);
    }

    function decrement(){
        // console.log("Inside function")
        if(counter>1){
            setCounter((preValue)=>preValue-1);
        }
    }

    function reset(){
        setCounter(1);
    }


    function increment2(){
        // console.log("Inside function")
        if(counter >= 10){
            setCounter2((preValue)=>preValue+1);
        }
    }

    function decrement2(){
        // console.log("Inside function")
        if(counter2>10){
            setCounter2((preValue)=>preValue-1);
        }
    }

    function reset2(){
        setCounter2(10);
    }

    return(
        <div id="usestatesty">
            <h1>Counter1:    {counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>

            <h1>Counter2:    {counter2}</h1>
            <button onClick={increment2}>+</button>
            <button onClick={decrement2}>-</button>
            <button onClick={reset2}>Reset</button>
        </div>
    );
}

export default UseState;