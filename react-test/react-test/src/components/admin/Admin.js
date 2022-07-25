import React,{useEffect,useState} from "react";
import './Admin.css'
import cart from './img/cart.png';
import dark from './img/dark-logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {useLocation} from 'react-router-dom';

const Admin=()=>{
    const [data,setData] = useState([]);
    const[categoryData,setcategory] = useState([])
    const[deleteData,setDelete] = useState(null)

    const navigate=useNavigate()
    const {state} = useLocation();
    console.log("check",state)

    const logout = ()=>{
        
        localStorage.clear("token")
           navigate("/login")
       console.log(localStorage.getItem("token"))
    }
    // const setDatas=(curElem)=>{
    //     console.log("curelem",curElem)
//        axios.get("http://192.168.1.4:7000/api/v2/mobile/get-product",{
//         params:{cat_id:curElem.uuid}
//        })
//        .then((res)=>{
//         // alert(res.data.message)
//         setData(res.data.result)
// console.log("resultss",res.data)
//        }).catch((error)=>{
//   console.log(error)
//        })
    //  }
const getIndivData=async(data)=>{
    const token=localStorage.getItem('token')
console.log(data)

  await axios.get(`http://192.168.1.4:7000/api/v2/mobile/getIndiProd?product_uuid=${data}`,{
        headers:{"token":token}
    })
    .then((res)=>{
       if(res.data.result){
       
        console.log("deatilss",res.data.result)
        navigate('/itemdetails',{state:res.data.result})
       }
console.log("indivproductdetails",res.data)
       }).catch((error)=>{
  console.log(error)
       })
}
    const getDatas=()=>{
        const token=localStorage.getItem('token')
        axios.get("http://192.168.1.4:7000/api/v2/mobile/get"   ,{
            headers:{"token":token}
        })
        .then((res)=>{
         // alert(res.data.message)
         setData(res.data.result)
 console.log("resultss",res.data)
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
      const searchproduct=(key)=>{
        axios.get('http://192.168.1.4:7000/api/v2/mobile/searchproduct/'+key,{
            params:{categoryName:data,}
        })
        .then((res)=>{
     
        setData(res.data.result)
    console.log("search",res.data.result)
        }).catch((error)=>{
   console.log(error)
        })
      }
      const deleteproduct=async(data)=>{
        const token=localStorage.getItem('token')
        console.log("data",data)
await axios.delete(`http://192.168.1.4:7000/api/v2/mobile/delete/${data}`,{
    headers:{"token":token}
})
.then((res)=>{
    setDelete("delete")
console.log(res)
   }).catch((error)=>{
console.log(error)
   })
      }


useEffect(()=>{
    getDatas()
    categorys()
    // logout()
    searchproduct()
    // deleteproduct()
    if(!localStorage.getItem('token')){
        navigate("/login")
    }
   
},[deleteData]);

    return(
     <div>

        <nav className="navbar">
 <div className="nav">
     <img src={dark} className="brand-logo" alt=""/>
     <div className="nav-items">
     <div className="search">
            <input type="text"   className="search-box" onChange={(key)=>searchproduct(key.target.value)} placeholder="search products and categorys "/>
            {/* <button className="search-btn" type="submit" onClick={searchproduct}  value="search" >search</button> */}
            
     </div>
     <a href="#"><img src={cart} alt=""/></a>
     <button onClick={logout}>Logout</button> 
     {/* <button   onClick={()=>navigate("/product")} >Home</button>   */}
        
    
 </div>
     </div>
     
</nav>



 <div className="product-containerr">

{
    data.map((curElem,index)=>{
        return(
            <div key={index}>
<div className="product-card">
         <div className="product-image">
             <span className="discount-tag">{curElem.discound}off</span>
             <img src={curElem.productImage} className="product-thumb" alt=""/>
             <button className="card-btn">add to whislist</button>
         </div>
         <div className="product-info">
             <h2 className="product-brand">{curElem.productName}</h2>
             <p className="product-short-des">{curElem.Description}</p>
         <span className="price">Rs.{curElem.discoundPrice} </span>
         <span className="actual-price">Rs.{curElem.Price}</span>
         </div>
         {/* <button  className="addproduct"  >Update</button>  */}
            <button  className="deleteproduct" onClick={()=>deleteproduct(curElem.uuid)} >-</button> 
            <button  className="getproduct" onClick={()=>getIndivData(curElem.uuid)} >viewDetails</button> 
     </div>
            </div>
        )
    })
    
}
<button className="add" onClick={()=>navigate("/addproduct",{state: state})}>+</button>
 </div>

<section className="collection-containerr">
            {
    categoryData.map((curElem,index)=>{
        // console.log("curelem",curElem)
        return(
            <div key={index} >
            <div className="collection">
                 <img src={"http://localhost:7000/"+curElem.categoryImage}  alt="" /> 
            <p className="collection-title">{curElem.categoryName}</p>
            <button  className="addproduct" onClick={()=>navigate("/product")} >+</button> 
            <button  className="addproduct" onClick={()=>navigate("/product")} >-</button> 
        </div> 
      
        </div>
       
            )
        })
        
    }
 
     </section> 
    
</div>

    )
}


export default Admin;