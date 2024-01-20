
import './ProductViewCatVise.scss'
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductViewCatVise = () => {

    const [prod, setProd] = useState([]);
    const { category } = useParams();

    const getProd = async () => {
        try {
          const res = await axios.get(`http://localhost:4078/api/getCatWiseProducts/${category}`);
          // console.log(res.data[0]);
          setProd(res.data);
          console.log(res.data);
          // console.log(prod[0].images);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      useEffect(() => {
        getProd();
      }, [category]);
      const delProduct=async(id)=>{
        const userConfirmed = window.confirm("Are you sure you want to delete this product?");
        if (userConfirmed) {
            try {
                const res = await axios.delete(`http://localhost:4078/api/delProduct/${id}`);
                if (res) {
                    alert("Product deleted successfully");
                }
                getProd();
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
      }



  return (
    <div className='categoryWiseProducts'>
      <div className="backBtn"><Link className='back-btn' to='/adminhome'>Back</Link></div>
      <h2 className='main-heading'>Collection</h2>
       {/* {prod.map((data, index) => (
        <h1 key={index}>{data.product_name}</h1>
      ))}  */}
    <div className="collection-cards">
    {
      prod.map((data,index)=>
    
       
      
  <div key={index}>
  <Link className='link' to={`/admproddetails/${data._id}`}>
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
  )
}

export default ProductViewCatVise
