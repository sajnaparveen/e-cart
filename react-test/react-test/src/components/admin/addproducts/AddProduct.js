import React,{useEffect,useState} from "react";
import { Navigate, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import {useLocation} from 'react-router-dom';

const AddProduct = ()=>{
    const[categoryData,setcategory] = useState([])
    const {state} = useLocation();
    // console.log("addproductuser",state)
    const navigate = useNavigate()
    const [ product, setProduct] = useState({
        productName: "",
        Description:"",
        Price: "",
        quantity:"",
        discound:"",
        discoundPrice:"",
        productImage:"",
        userUuid:state.uuid
    })

    const handleChange = e => {
        const { name, value } = e.target
        setProduct({

            ...product,
            [name]: value
        })
    }
    const token=localStorage.getItem('token')
    const postDatas=()=>{
        console.log("product",product)
       axios.post("http://192.168.1.4:7000/api/v2/mobile/add",product,{
        headers:{"token":token}
       }
       )
       .then((Response)=>{
        console.log("response",Response)
        if(Response){
            navigate("/admin")
        }
       }).catch((error)=>{
  console.log(error)
       })
     }
     const categorys=()=>{
        axios.get("http://192.168.1.4:7000/api/v2/mobile/getcategory")
        .then((res)=>{
         // alert(res.data.message)
         setcategory(res.data.result)
 console.log("category",res.data.result)
        }).catch((error)=>{
   console.log(error)
        })
      }
      useEffect(()=>{
        categorys()
        
      },[])
    return(
       
      <section className="form my-4 mx-5">
  <button onClick={()=>navigate("/admin")}>Go Back</button>
             <form >
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="productName" value={product.productName} name="productName" onChange={ handleChange } className="form-control "/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="Description" value={product.Description} name="Description" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="Price" value={product.Price} name="Price" onChange={handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="quantity" value={product.quantity} name="quantity" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="discound" value={product.discound} name="discound" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="discoundPrice" value={product.discoundPrice} name="discoundPrice" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     {/* <input type="text" placeholder="categoryUuid" value={product.categoryUuid} name="categoryUuid" onChange={ handleChange } className="form-control"/> */}
                {
                     <select  name="categoryUuid" onChange={handleChange} >
                        {categoryData.map((data,index)=>{
                            return(
                                
                           <option key={index} value={data.uuid}>{data.categoryName}</option>
                         
                            )
                         })} 
                   
                     </select>
}
                 </div>
                 </div>
                 {/* <div className="from-row">
                 <div className="col-lg-7">
                     <input type="text" placeholder="userUuid" value={product.userUuid} name="userUuid" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div> */}
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input  type="file" value={product.productImage} name="productImage" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7" >
                     <button type="button"  onClick={postDatas} className="btn1 mt-3 mb-5">Add Product</button>
                 </div>
                 </div>
                
             </form>
        

      </section> 

    )
}

export default AddProduct