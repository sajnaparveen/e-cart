import React,{useEffect,useState} from "react";
import './Products.css'
import cart from './img/cart.png';
import user from './img/user.png';
import dark from './img/dark-logo.png'
import { useNavigate ,useLocation} from 'react-router-dom'
import axios from 'axios';
const Products=()=>{
   
    const [data,setData] = useState([]);
    const[categoryData,setcategory] = useState([])

    const[searchData,setSearchData] = useState([])

    const navigate=useNavigate()

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

     const getProducts=(curElem)=>{
        console.log(curElem)

        axios.get("http://192.168.1.4:7000/api/v2/mobile/get-product",{
                    params:{cat_id:curElem.uuid}
                   })
                   .then((res)=>{
                   
                    setData(res.data.result)
                       console.log("resultss",res.data)
                   }).catch((error)=>{
                         console.log(error)
                   })
     }
     const categorys=()=>{
        axios.get("http://192.168.1.4:7000/api/v2/mobile/getcategory")
        .then((res)=>{
         setcategory(res.data.result)
 console.log("category",res.data.result)
        }).catch((error)=>{
   console.log(error)
        })
      }
      const searchproduct=(key)=>{
        console.log(key)
        axios.get('http://192.168.1.4:7000/api/v2/mobile/searchproduct/'+key,{
            params:{productname:data,}
        } )
        .then((res)=>{
         
        setData(res.data.result)
    // console.log("search",res.data.result)
        }).catch((error)=>{
   console.log(error)
        })
      }
useEffect(()=>{
   
    categorys()
    
    if(!localStorage.getItem('token')){
        navigate("/login")
    }
   
},[]);

    return(
     <div>

        <nav className="navbar">
 <div className="nav">
     <img src={dark} className="brand-logo" alt=""/>
     <div className="nav-items">
     <div className="search">
            <input type="text"   className="search-box" onChange={(key)=>searchproduct(key.target.value)} placeholder="search products and categorys "/>
           
            {/* <input type="text"   className="search-box" onChange={(key)=>setSearchData(key.target.value)} placeholder="search products and categorys "/> */}

            {/* <button className="search-btn" type="submit" onClick={()=>searchproduct(searchData)}  value="search" >search</button> */}

     </div>
     <a href="#"><img src={cart} alt=""/></a>
     <button onClick={logout}>Logout</button> 
    
  
     
 </div>
     </div>
     
</nav>



 <div className="product-container">

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
     </div>
            </div>
        )
    })
    
}
 </div>

<section className="collection-container">
            {
    categoryData.map((curElem,index)=>{
        // console.log("curelem",curElem)
        return(
            <div key={index} onClick={()=>getProducts(curElem)}>
            <div className="collection">
                 <img src={"http://localhost:7000/"+curElem.categoryImage}  alt="" /> 
            <p className="collection-title">{curElem.categoryName}</p>
        </div> 
        </div>
            )
        })
        
    }
 
     </section> 
    
</div>

    )
}

export default Products;