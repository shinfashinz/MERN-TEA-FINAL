import React, { useEffect, useState } from 'react'
import './Wishlist.scss'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
const Wishlist = () => {
    const { id } = useParams();
    const [getPrdct, setProdct] = useState([]);
  
    const getwishlistprdct=async()=>{
      const res=await axios.get(`http://localhost:4078/api/getWishlistProduct/${id}`)
      setProdct(res.data)
      console.log(res.data);
    }
  
    useEffect(()=>{
      getwishlistprdct();
    },[])
  
    const delwishlistPrdct = async (id) => {
      const userConfirmed = window.confirm("Are you sure you want to delete this product from the cart?");
      if (userConfirmed) {
        try {
          const res = await axios.delete(`http://localhost:4078/api/delWishListProduct/${id}`);
          // console.log(res.data);
          if (res) {
            alert("Product deleted");
          } else {
            alert("Product not deleted");
          }
          getwishlistprdct();
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
    };
  
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
      getPrdct.map((data,index)=>
    
       
      
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
 <Link to={`#${data._id}`}><button  onClick={()=>delwishlistPrdct(data._id)}>Delete Product</button></Link>
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

export default Wishlist
