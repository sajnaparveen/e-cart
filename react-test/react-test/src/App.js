import { useEffect ,useState } from 'react';
import logo                                                                                                                      from './logo.svg';
// import './App.css';
import Register from './components/register/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login  from './components/login/Login';
import Products from './components/products/Products';
import Admin from './components/admin/Admin';
import Details from './components/admin/productdetails/Details';
import AddProduct from './components/admin/addproducts/AddProduct';
import UpdateDetails from './components/admin/update/UpdateDetails';
// import HookTest from './components/HookComp/HookComponent';
import Itemlist from './components/item/item';
// import Itemdetails from './components/itemlist/itemlist';
function App() {
//   const [loginStatus, setLoginStatus] = useState(0)
// let status = 0
//   useEffect(()=>{

//     console.log("loginStatus", loginStatus)
//    setLoginStatus( localStorage.getItem("loginStatus"))
//    status =  localStorage.getItem("loginStatus")
   
// console.log("status",loginStatus)
//   },[])

  return ( 
    <div >
      
{/* <Register/> */}
{/* <Login/> */}
{/* <HookTest /> */}
{/* <Itemlist data="sajna"/> */}
{/* <Itemlist/> */}
{/* <Products/> */}
<Router>
{/* {
          status === 0 ? <Login  /> :  <Products/>
       } */}
  <Routes>
     
    <Route path="/" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/product" element={<Products/>} />
     <Route path="/admin" element={<Admin/>} />
     <Route path="/itemdetails" element={<Details/>} />
     <Route path="/addproduct" element={<AddProduct/>} />
     <Route path="/itemdetails/updatedetails" element={<UpdateDetails/>} />
     <Route path="/item" element={<Itemlist/>}/>
  </Routes>
</Router>
</div>
  );
}

export default App;
