import React, { useEffect, useState } from 'react'
import './Allproducts.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Allproducts = () => {
    const navigate=useNavigate();
    const{id}=useParams()
    const [msg,setmsg]=useState("")
    const value=JSON.parse(localStorage.getItem('customer_token'));
    const[getProducts,setProduct]=useState([])
    const[cart,setCart]=useState({

    })

    const getName=async()=>{
      const res=await axios.get("http://localhost:4078/api/customerhome",{
        headers:{Authorization:`Bearer ${value}`},

      })
      setmsg(res.data.msg)
    }
    useEffect(()=>{
      getName();
    },[])



    const getproducts=async()=>{
        const res=await axios.get(`http://localhost:4078/api/getAllProducts`)
        setProduct(res.data)
        setCart(res.data)
        console.log(res.data);
    }
    useEffect(()=>{
      getproducts();
    },[])


    // const addToCart = async () => {
    //   try {
         
    //     const res = await axios.post("http://localhost:4078/api/addtocart", {...cart,cust_id:msg.id});
    //     console.log(res.data);
    //     if(res){
    //       alert("Added To Cart")
    //     }else{
    //       alert("Error adding product to cart. Please try again.")
    //     }
    //   } catch (error) {
    //       console.error("Error adding product to cart:", error);
    //       alert("Error adding product to cart. Please try again.");
    //   }
    // };




  return (
    <div>
       <div className='categoryWiseProducts'>
      <div className="backBtn"><Link className='back-btn' to='/'>Back</Link></div>
      <h2 className='main-heading'>Collection</h2>
       {/* {prod.map((data, index) => (
        <h1 key={index}>{data.product_name}</h1>
      ))}  */}
    <div className="collection-cards">
    {
      getProducts.map((data,index)=>
    
       
      
  <div key={index}>
  <Link className='link' to={`/proddetailcust/${data._id}`}>
   <div className="Card"><div className="prdct-thumnalil"><img src={data.banner} alt="" /></div>
  <div className="card-details">
  <p className='item-title'>{data.name}</p>
  <div><span className="prdct-description">{data.title}</span></div>
  <div className="prices">
  <div><p className='price'>₹ {data.price}</p></div>
  <div><strike><p className='og-price'>₹ 799</p></strike></div>
  </div>
 <div className="edit-btn">
 <Link to={`#${data._id}`}><button  onClick={()=>delProduct(data._id)}>Delete Product</button></Link>
 </div>
  </div>
   </div>
   </Link>
   </div>
  
     )
     }
        </div>
    </div>
    </div>
  )
}

export default Allproducts