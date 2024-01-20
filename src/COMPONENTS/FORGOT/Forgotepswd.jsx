import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './forgotpswd.css'
const Forgotepswd = () => {
    const [val,setVal]=useState({})
    const handlechange=(e)=>{
        setVal({[e.target.name]:e.target.value})
        console.log(val);
    }
  return (
    <div>
      <div className="forgot-card">
        <h5>Forgot Your Password</h5>
        <div className="forgot-form">
          <div>
            <input type="text" placeholder='Registered Phone number'name='number' onChange={handlechange}/>
          </div>
          <div>
            <input type="text" placeholder='Registered Email'name='email' onChange={handlechange}/>
          </div>
          <div>
            <input type="password" placeholder='New password'name='password' onChange={handlechange} />
          </div>
          <button>Change Password</button>
          <p></p>
          <div>
            <Link className='frgt-usr' to='/adminlogin'>Back</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgotepswd
