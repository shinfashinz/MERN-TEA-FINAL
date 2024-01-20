import React, { useState } from 'react'
import './CustomerLogin.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import axios from 'axios'
const CustomerLogin = () => {
    const navigate=useNavigate()
    const [val,setVal]=useState({
        email:"",
        password:""
    })
    const GetData=(e)=>{
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val);
    }

    const Login=async(e)=>{
        e.preventDefault()
        const res=await axios.post("http://localhost:4078/api/logincustomer",{...val})
        console.log(res.data);
        const data=res.data
        if(res){
            alert("Seccessfully Logined")
            const customer_token=data.token
            localStorage.setItem("customer_token",JSON.stringify(customer_token))
            navigate("/")
        }
    }
    
  return (
   <div>
      <div className='CustomerReg-main'>
      <div className="CustRegMain">
        <div className="CustRegLeft">
          <Link className='backBtn' to='/'>Back</Link>
          <div className="CusRegLeftContent">
            <h1>Mern Tea.</h1>
            <div className="ul"></div>
            <h2>Let's Sign in !</h2>
            <p>Let's sign in by entering Email and Password !</p>
          </div>
        </div>
        <div className="CustRegRight">
          <h2>Sign In</h2>
          <div className="formMainDiv">
            <form action="" onSubmit={Login}>
              <div>
                
                 <input type="text"  placeholder='Email' name='email' onChange={GetData}/>
              </div>
              <div>
                <input type="password"  placeholder='Password' name='password' onChange={GetData}/>
               
                </div>
              
             <div className='reg-div'> <button className='resgiter-btn'>Login</button></div>
            <Link className='iHaveAccount' to='/Customerregistration'>Don't Have an Account</Link>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CustomerLogin