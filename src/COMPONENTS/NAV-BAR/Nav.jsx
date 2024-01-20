import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'
import axios from 'axios'
const Nav = () => {
  const [id,setId]=useState("")
  const [msg, setmsg] = useState("");
  const value=JSON.parse(localStorage.getItem("customer_token"));
// console.log(value);
  const getName=async()=>{
    const res=await axios.get("http://localhost:4078/api/customerhome",{
      headers:{Authorization:`Bearer ${value}`},

    })
    console.log(res.data.id);
    setmsg(res.data.msg)
    setId(res.data.id)
    console.log(id);
  }
  useEffect(()=>{
    getName();
  },[])

  const Logout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      localStorage.clear();
      naviagate("/")

    }
  };
  return (
    <div>
       <div className='navbar-main'>
        {/* <div className="superNav border-bottom py-2 bg-light">
      <div className="container">b
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
            <select  className="me-3 border-0 bg-light">
              <option value="en-us">EN-US</option>
            </select>
            <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3"><strong>info@sportstrack.com</strong></span>
            <span className="me-3"><i className="fa-solid fa-phone me-1 text-warning"></i> <strong>987 786 5431</strong></span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
            <span className="me-3"><i className="fa-solid fa-truck text-muted me-1"></i><a className="text-muted" href="#">Shipping</a></span>
            <span className="me-3"><i className="fa-solid fa-file  text-muted me-2"></i><a className="text-muted" href="#">Policy</a></span>
          </div>
        </div>
      </div>
    </div> */}
    <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#"><i className="fa-solid fa-shop me-2"></i> <strong>MERN-TEA</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
          <div className="input-group">
            <span className=" input-group-text  text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" className="form-control"  style={{ color: "#7a7a7a" }} />
            <button className="btn text-white">Search</button>
          </div>
        </div>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <div className="ms-auto d-none d-lg-block">
            <div className="input-group">
              <span className="sss input-group-text  text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" className="form-control" style={{color:"#7a7a7a"}} />
              <button className="btn text-white">Search</button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="/allproducts">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#category-main">Category</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#">About</a>
            </li> */}
          </ul>
          <ul className="navbar-nav ms-auto navoo ">
            <li className="nav-item">
              <Link className='icon' to={`/addtocart/${id}`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg></Link>
            </li>
            <li className="nav-item wishlist">
            <Link className='wish' to={`/addtowishlist/${id}`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg></Link>
            </li>
            <li className="nav-item">
            {msg ?(
  <>
   <Link className='signout' onClick={ Logout}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg></Link>    <i class="fa fa-user" aria-hidden="true" id='user-head'></i>
<span id='msg'>{msg}</span>   
  </>
):(
  <Link className='icon' to='/customerlogin'>
           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg>
           </Link>
)}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </div>
  )
}

export default Nav
