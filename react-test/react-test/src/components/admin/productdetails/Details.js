import React from "react";
import { useNavigate } from 'react-router-dom'

import {Link,useLocation} from 'react-router-dom';
const Details=()=>{
    const navigate=useNavigate()
    const {state} = useLocation();
    console.log(state,"sdgsrtgtr")
    const updateData = ()=>{
        
    }
    return(
        <div>
  <table className="table">

  <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>discound</th>
                    <th>discoundPrice</th>
                    <th>productImage</th>

                </tr>
            </thead>

            <tbody>
            <br></br>
                <tr>
                    <td>{state.productName}</td>
                    <td>{state.Description}</td>
                    <td>{state.Price}</td>
                    <td>{state.quantity}</td>
                    <td>{state.discound}</td>
                    <td>{state.discoundPrice}</td>
                    <td> <img src={state.productImage} className="productimg"  alt="" /></td>
                    <Link to='/itemdetails/updatedetails' state={state}>
                    <button className="update" onClick={()=>updateData()} >UpdateDetails</button>
                    </Link>
                </tr>
            </tbody>
          
  </table>
 
        </div>
    )
}

export default Details;
