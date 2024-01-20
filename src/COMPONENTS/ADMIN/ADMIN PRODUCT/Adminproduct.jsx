import React, { useState,useEffect } from 'react'
import axios from 'axios'
// import convertToBase64 from '../../../../JS FILES BACKEND/base64'
import './Adminproduct.scss'
import { Link, useNavigate } from 'react-router-dom'




const Adminproduct = () => {
  const navigate=useNavigate()
  let Banner="";
  let Images=""
  const [getCat,setCat]=useState([])
  const [val,setVal]=useState({

  name:"",
  category:"",
  title:"",
  description:"",
  price:"",
  stock:"",
  banner:"",
  images:[]
})

function convertToBase64Banner(file) {
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
const convertToBase64Images = (files) => {
  return Promise.all(
    Array.from(files).map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result));
        reader.addEventListener('error', (error) => reject(error));
        reader.readAsDataURL(file);
      });
    })
  );
};
const GetBanner=async(e)=>{
  e.preventDefault()

  Banner=await convertToBase64Banner(e.target.files[0])
  console.log(Banner);
}

const GetImages=async(e)=>{
  e.preventDefault()

  Images=await convertToBase64Images(e.target.files)
  console.log(Images);
  // setVal(Images)
}

const GetData=(e)=>{ 
  setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  console.log(val);
}
// const GetStock=(e)=>{
//   setVal((pre) => ({...pre,stock: { ...pre.stock, [e.target.name]: e.target.value },}));
// }
// const Upload=async(e)=>{
//   e.preventDefault()

//   photo=await convertToBase64(e.target.files[0])
//   console.log(photo);
// }
const getCategory=async()=>{
  const res=await axios.get("http://localhost:4078/api/getcategory")
  setCat(res.data)
  console.log(getCat);
}
useEffect(()=>{
  getCategory()
},[])

const addProduct=async(e)=>{
//   try {
//    e.preventDefault()
//    const res=await axios.post("http://localhost:4078/api/addproduct",{...val,photo:photo})
//    console.log(res.data);
//    if(res.status!=404){
//      alert("Product Added")
//    }
//   } catch (error) {
//      alert("error",error)
//    }
try {
  e.preventDefault()
  const res = await axios.post("http://localhost:4078/api/addproduct",{...val,images:Images,banner:Banner});
  console.log(res.data);
  if(res){
    alert("Product Added")
    navigate("/adminhome")
  }
} catch (error) {
  console.log(error);
}
  }

  return (
    <div className='add-products-main'>
    <div className="header-main">
    <div className="header-left">
      <Link to='/adminhome' className='back-btn'>Back</Link>
    </div>
     {/* <div className="header-right">
     <div className="display-username">
          <span><i className="fa fa-user" aria-hidden="true"></i>{msg} <button onClick={Logout}><i className="fa fa-sign-out" aria-hidden="true"></i></button></span>
      </div>
     </div> */}
    </div>
     <div className="card">
<h4 className="title">Add New Product!</h4>
<form onSubmit={addProduct}>

  <div className="field">
    <input id="prodname" placeholder="Product Name" className="input-field" name="name" type="text" onChange={GetData} />
  </div>

  <div className="field">
    <input id="prodname" placeholder="title" className="input-field" name="title" type="text" onChange={GetData} />
  </div>
  <div className='label'><label htmlFor="">Category :</label></div>
  <div className="field">
  <select name="category" id="category"  className="input-field" onChange={GetData}>
   {
    getCat.map((data,index)=>
      <option value={data.category} key={index}>{data.category}</option>
   )
   }
    </select>
  </div>
  <div className="field">
    <input id="description" placeholder="Description About Product" className="input-field" name="description" type="text" onChange={GetData}/>
  </div>
  <div className="field">
    <input id="stock" placeholder="Stock" className="input-field" name="stock" type="text" onChange={GetData}/>
  </div>
  <div className="field">
    <input id="price" placeholder="Price" className="input-field" name="price" type="text" onChange={GetData}/>
  </div>
  {/* <div className='label'><label htmlFor="">Size :</label></div> */}
  {/* <div className="field"> */}
    {/* <input id="size" placeholder="Size" className="input-field" name="size" type="text" onChange={GetData}/> */}
    {/* <select name="size" id="" onChange={GetData} className="input-field">
      <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
      <option value="XXL">XXL</option>
    </select>
  </div> */}


  <div className="field">
  <div><label htmlFor="">Banner</label></div>
    <input id="banner" placeholder="banner" className="input-field" name="banner" type="file"  onChange={GetBanner}  />
  </div>
  <div className="field">
  <div><label htmlFor="">Images</label></div>
    <input id="image" placeholder="Image" className="input-field" name="images" type="file"  onChange={GetImages}  multiple/>
  </div>
  <button className="btn" type="submit">Add</button>
</form>
</div>
  </div>
  )
}

export default Adminproduct

