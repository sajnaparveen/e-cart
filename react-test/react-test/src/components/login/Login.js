// import './Register.css';
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import axios from 'axios';

const Login = ()=>{
 
const navigate=useNavigate()
    const [ user, setUser] = useState({
        userName: "",
        password:""
    })
    // const [userRole, setUserRole] = useState()
    const handleChange = e => {
        const { name, value } = e.target
        setUser({

            ...user,
            [name]: value
        })
        // console.log(user)
    }
    const postDatas=()=>{
        const {userName,password}=user
        console.log(userName)
        console.log(password)
       axios.post("http://192.168.1.4:7000/api/v1/user/loginpage",user)
       .then((res)=>{
        alert(res.data.message)
        // setUserRole(res.data.data.role)
        // console.log("dfgtrhr",setUserRole(res.data.data.role))
localStorage.setItem("token",res.data.data.jwttoken)

if(localStorage.getItem("token")){
    // console.log("ress",userRole)
    if(res.data.data.role==="admin"){
        console.log("res.data.data.uuid",res.data.data)
        navigate("/admin",{state:res.data.data})
    }else{
        navigate("/product",{state:{userRole:res.data.data.role}})
    }

}
        
       }).catch((error)=>{
  console.log(error)
       })
     }
    return(
      <section className="form my-4 mx-5">
    <div className="container">
    <div className="row">
        <div className="col-lg-5">
            <img src="https://i.pinimg.com/474x/31/93/84/319384a8e571c74e2ab1ac7ee64d3d76.jpg"  alt=""/>
        </div>
        <div className="col-lg-7 px-5 pt-5">
             <h4>Sign Up</h4>
             <form >
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="username" placeholder="UserName"value={user.userName} name="userName" onChange={ handleChange } className="form-control "/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="password" placeholder="*********" value={user.password} name="password" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7" >
                     <button type="button" onClick={postDatas} className="btn1 mt-3 mb-5">Sign Up</button>
                 </div>
                 </div>
                 <a className="forgot" href="#">Forgot password</a>
                 <p className="login"> Already have an account?<a href="#" onClick={()=>navigate("/")}>Login Here</a></p>
                 {/* <button onClick={()=>navigate("/login")} >login</button> */}
             </form>
        </div>
    </div>
</div>

      </section> 
    )
}

export default Login