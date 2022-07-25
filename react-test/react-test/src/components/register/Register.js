// import './Register.css';
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Register.css'
import axios from 'axios';

const Register = ()=>{
 
const navigate=useNavigate()
    const [ user, setUser] = useState({
        userName: "",
        email:"",
        mobileNumber: "",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({

            ...user,
            [name]: value
        })
        // console.log(user)
    }
    const postDatas=()=>{
        const {userName,email,mobileNumber,password}=user
        console.log(userName)
        console.log(email)
        console.log(mobileNumber)
        console.log(password)
       axios.post("http://192.168.1.4:7000/api/v1/user/signupPage",user)
       .then((Response)=>{
        // console.log(Response)
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
                     <input type="email" placeholder="Email"value={user.email} name="email" onChange={ handleChange } className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="mobileno" placeholder="MobileNo"value={user.mobileNumber} name="mobileNumber" onChange={ handleChange } className="form-control"/>
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
                 <p className="login"> Already have an account?<span className="loginpage" onClick={()=>navigate("/login")} >Login Here</span></p>
                 {/* <button onClick={()=>navigate("/login")} >login</button> */}
             </form>
        </div>
    </div>
</div>

      </section> 

    )
}

export default Register