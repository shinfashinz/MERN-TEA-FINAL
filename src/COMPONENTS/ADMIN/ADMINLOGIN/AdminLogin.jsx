import React, { useState } from 'react'
import './AdminLogin.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const AdminLogin = () => {
    const navigate=useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const Login=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post("http://localhost:4078/api/adminlogin",{
        email:email,
        password:password
      })
      const data=res.data;
      console.log(data);
      if(res.status!==404){
        const token=data.token
        localStorage.setItem("admin_token",JSON.stringify(token))
        navigate("/adminhome")
      }
    } catch (error) {
      alert("cant't Login",error)
    }
  }
  return (
    // onChange={(e)=>setEmail(e.target.value)}
    <div>
        <div className='admin-resgiter-page'>
        <div className="header-left">
        <Link to='/' className='back-btn'>Back</Link>
      </div>
       <div className="card">
  <h4 className="title">Admin Sign in!</h4>
  <form>
 
    <div className="field">
    <svg className="input-icon" viewBox="0 0 20 20">
	<path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>
      <input id="logemail" placeholder="Email" className="input-field" name="email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
    </div>
   
    <div className="field">
      <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
      <input id="logpass" placeholder="Password" className="input-field" name="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
    </div>
   
    <button className="btn" type="submit" onClick={Login} >Sign in</button>
    {/* <a href="#" className="btn-link">Forgot your password?</a> */}
   <Link to='/adminregistration'  className="btn-link">Don't Have an account</Link>
  </form>
</div>
    </div>
      
    </div>
  )

}

export default AdminLogin
