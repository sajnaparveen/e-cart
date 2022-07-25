import React,{useState} from "react";

const HookTest = ()=>{
    const [declareData,changeFunction] = useState("test data")
    const changingFunction = ()=>{
        changeFunction("wecome!!!")
    }
     
    return(
     <>
     <h1>Test Hook {declareData}</h1>
     <button onClick={changingFunction}>click</button>
     <h1>after click Test Hook {declareData}</h1>
     </>
 )   
}

export default HookTest;