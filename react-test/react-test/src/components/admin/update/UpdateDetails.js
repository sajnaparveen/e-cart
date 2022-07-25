// import './Register.css';
import React,{useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const UpdateDetails = ()=>{
const navigate=useNavigate()
const {state} = useLocation();
const[productName, setProductName]=useState(state.productName);
const[Description, setDescription]= useState(state.Description);
const[Price, setPrice]= useState(state.Price);
const[discound, setdiscound]= useState(state.discound);
const[discoundPrice, setdiscoundPrice]= useState(state.discoundPrice);
const[quantity, setquantity]= useState(state.quantity);

    const updateProduct = async()=>{
        console.log("updateTheData");
        let data = {
            uuid:state.uuid,
            updateData:{
                productName:productName,
    Description:Description,
    Price: Price,
    quantity:quantity,
    discound:discound,
    discoundPrice:discoundPrice     
    
            }

        }
       let token= localStorage.getItem("token")
        const updateDetails = await axios.put(`http://192.168.1.4:7000/api/v2/mobile/update`, data, {
            headers:{"token": token}
        })
        if(updateDetails){
            navigate('/admin', {state: updateDetails.data.result})
        }
    }
    return(
        <section className="form my-4 mx-5">
  <button onClick={()=>navigate("/admin")}>Go Back</button>
        <form >
            <div className="from-row">
            <div className="col-lg-7">
                <input type="text" placeholder="productName" value={productName} name="productName" onChange={(e)=>setProductName(e.target.value)} className="form-control "/>
            </div>
            </div>
            <div className="from-row">
            <div className="col-lg-7">
                <input type="text" placeholder="Description" value={Description} name="Description" onChange={(e)=>setDescription(e.target.value)} className="form-control"/>
            </div>
            </div>
            <div className="from-row">
            <div className="col-lg-7">
                <input type="text" placeholder="Price" value={Price} name="Price" onChange={(e)=>setPrice(e.target.value)} className="form-control"/>
            </div>
            </div>
            <div className="from-row">
            <div className="col-lg-7">
                <input type="text" placeholder="quantity" value={quantity} name="quantity" onChange={(e)=>setquantity(e.target.value)} className="form-control"/>
            </div>
            </div>
            <div className="from-row">
            <div className="col-lg-7">
                <input type="text" placeholder="discound" value={discound} name="discound" onChange={(e)=>setdiscound(e.target.value)} className="form-control"/>
            </div>
            </div>
            <div className="from-row">
            <div className="col-lg-7">
                <input type="text" placeholder="discoundPrice" value={discoundPrice} name="discoundPrice" onChange={(e)=>setdiscoundPrice(e.target.value)} className="form-control"/>
            </div>
            </div>
          
            <div className="from-row">
            <div className="col-lg-7" >
                <button type="button"  onClick={updateProduct} className="btn1 mt-3 mb-5">Add Product</button>
            </div>
            </div>
           
        </form>
   
 </section> 

    )
}

export default UpdateDetails;