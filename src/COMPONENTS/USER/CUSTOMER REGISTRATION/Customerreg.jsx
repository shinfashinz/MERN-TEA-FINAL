import React, { useState } from 'react'
import './Customerreg.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Customerreg = () => {
    let Photo=""
    const[val,setVal]=useState({
      name:"",
      email:"",
      password:"",
      phone:"",
      personal_address:"",
      location:{
          state:"",
          district:"",
          pincode:"",
          place:"",
          landmark:"",
          street:"",
      },
      photo:""
    })
  
    function convertToBase64(file) {
      return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
              resolve(fileReader.result)
          }
          fileReader.onerror = (error) => {
              reject(error)
          }
      })
    }
  
    const upload=async(e)=>{
      e.preventDefault();
      Photo= await convertToBase64(e.target.files[0])
      console.log(Photo);
    }
  
    const GetLocation=(e)=>{
      setVal((pre)=>({...pre,location:{...pre.location,[e.target.name]:e.target.value}}))
    }
  
    const GetData=(e)=>{
     setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
     console.log(val);
    }
  
    const registerCustomer=async(e)=>{
      e.preventDefault();
     try {
      const res=await axios.post("http://localhost:4078/api/addcustomer",{...val,photo:Photo})
      console.log(res.data);
      if(res)
      {
        alert("successfully Registered")
      }
     } catch (error) {
      alert("Not added")
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
            <h2>Let's Join!</h2>
            <p>Create an account once and log all mern-Tea sites and partners in one click!</p>
          </div>
        </div>
        <div className="CustRegRight">
          <h2>Sign Up</h2>
          <div className="formMainDiv">
            <form action="" onSubmit={registerCustomer}>
              <div>
                 <input type="text"  placeholder='Name' name='name' onChange={GetData}/>
                 <input type="text"  placeholder='Email' name='email' onChange={GetData}/>
              </div>
              <div>
                <input type="password"  placeholder='Password' name='password' onChange={GetData}/>
                <input type="text"  placeholder='Phone' name='phone' onChange={GetData}/>
                </div>
              <div>
                <input type="text"  placeholder='Personal Adress' name='personal_address' onChange={GetData}/>
                <input type="text"  placeholder='State' name='state' onChange={GetLocation}/>
                </div>
              <div>
                <input type="text"  placeholder='District' name='district' onChange={GetLocation}/>
                <input type="text"  placeholder='Pincode' name='pincode' onChange={GetLocation}/>
              </div>
              <div>
                <input type="text"  placeholder='Place' name='place' onChange={GetLocation}/>
                <input type="text"  placeholder='Landmark' name='landmark' onChange={GetLocation}/>
              </div>
              <div>
                <input type="text"  placeholder='Street' name='street' onChange={GetLocation}/>
                <input type="file"  placeholder='Photo' name='photo' onChange={upload}/>
              </div>
             <div className='reg-div'> <button className='resgiter-btn'>Register</button></div>
            <Link className='iHaveAccount' to='/CustomerLogin'>I Have Account</Link>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Customerreg
