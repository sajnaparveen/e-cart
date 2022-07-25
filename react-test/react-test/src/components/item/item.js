import React,{ useEffect} from "react";
import Itemdetails from "../itemlist/itemlist";

const Itemlist=(props)=>{
    useEffect(()=>{
        console.log( props)
    })
    return(
        <div>
            <h1>Parent component {props.data}</h1>
            <Itemdetails data="parveen"/>
        </div>
    )
  
}

export default Itemlist;
