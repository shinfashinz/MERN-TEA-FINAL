import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProductdetailAdm.scss'
import axios from 'axios'


const ProductdetailsAdm = () => {
    const {id}=useParams()
    const [getProduct,setProduct]=useState([])

    const getProducts=async()=>{
        const res=await axios.get(`http://localhost:4078/api/getProduct/${id}`)
        // console.log(res.data);
        setProduct(res.data)
        console.log(getProducts.images[0]);
    }
  
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
       <div className="product-details">
        <div className="head">
            <h4>product details</h4>
        </div>
        <div className="row main">
            <div className="col-lg-6">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active caros">
      {getProduct.images && getProduct.images[0] && (
         <img src={getProduct.images[0]} class="d-block w-100" alt=""/>
      )}
     
    </div>
    {/* <div class="carousel-item caro">
     {getProduct.images && getProduct.images[0] && (
         <img src={getProduct.images[1]} class="d-block w-100" alt=""/>
      )}
    </div> */}
    {/* <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            <div className="col-lg-6">
                <div className="contents">
                <div className="product-name">
                    <h5>{getProduct.name}</h5>
                </div>
                <div className="product-title">
                    <p>{getProduct.title}</p>
                </div>
                <div className="product-description">
                    <p>{getProduct.description}</p>
                </div>
                <div className="product-description">
                    <p>{getProduct.category}</p>
                </div>
                    <div className="product-price">
                        <h6>{getProduct.price}₹</h6>
                    </div>
                   <div className="edit-button">
                   <Link className='edit-btn' to={`/editproduct/${getProduct._id}`}>Edit</Link>
                   </div>

                </div>
                
            </div>
        </div>
      </div>
          </div>
  )
}

export default ProductdetailsAdm
