import React, { useEffect, useState } from 'react'
import './Home.css'
import { GiScooter } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { TbReplace } from "react-icons/tb";

import Nav from '../NAV-BAR/Nav';
import Fotter from '../FOOTER/Fotter';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
  const [getProducts,setProducts]=useState([])
  
  
  // http://localhost:7000/sportstrack/getAllProducts
  const getAllProducts=async()=>{
    const res=await axios.get("http://localhost:4078/api/getAllProducts") 
    // console.log(res.data);
    setProducts(res.data)
    console.log(getProducts);
  }
  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <div>
      
<Nav/>
     

     {/* ..............................carousel section............................. */}
   <div className="carosel-images">
   
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active caro">
      <img src="/mybanner.webp" class="d-block w-100" alt="..."/>
      <div className="content">
        <h4>Explore real taste of coffee</h4>
        <button id='buy'>Buy Now</button>
        <button id='view'>View more</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/bannerimg3.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/banner.webp" class="d-block w-100" alt="..."/>
    </div>
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

     {/* ............................. react icons .................... */}
<div className="react-icons">

  <GiScooter className='my-scooter' />
  <GiCoffeeCup className='my-cooffecup'/>
  <GiHamburger className='my-snaks' />
  <TbReplace className='my-replacement' />
</div>
<div className="rect-icon-description">
  <h6>Free Delivery on
First order</h6>
<h6 id='taste'>Best Taste Guaranttee</h6>
<h6 id='dishes'>Variety of Dishes</h6>
<h6>90%Repeat Customer</h6>
</div>


{/* ......................... welcome ........................... */}

<div className="welcome">
<div className="welcome-part">
<div className="welcome-headding">
    <h1>Welcome To Mern-T</h1>
  </div>
  <div className="welcome-description">
    <p>At Mern-T, we are more than just coffee enthusiasts; we are purveyors of the extraordinary coffee experience.

We invite you to become a part of our coffee family, where every coffee lover is united by the appreciation of exceptional coffee and the joy it brings to life's moments.</p>
</div>
  </div>
  <div className="welcome-imges">
  <img src="/top-vicoffee.jpg" alt="" />
  <img src="/samoosa.avif" alt="" />
 
  
    <img src="/fresh-coffee.avif" alt="" />
  </div>
</div> 
{/* ................................................................................................. */}
<div className="banner-split">
  <div className="banner1">
    <img src="/banner23.webp" alt="" />
  </div>
  <div className="banner2-description">
    <img src="/bannerside.webp" alt="" />
   <div className="description-inside-banner">
   <h3>
Best Business  You Can Start for High Income with  London Coffee Franchise</h3>
    <h6>
London Coffee culture is a delightful blend of tradition and innovation. From sipping a classic flat white to indulging in inventive latte art, the city offers something for every coffee enthusiast.
</h6>
<p>Whether you prefer cozy nooks or bustling cafes, London’s diverse neighborhoods provide a variety of coffee experiences to explore.</p>
   </div>
  </div>
</div>
{/* ............................................................................................. */}


<div className="category-main">
      <div className="cat-heading" id='category-main'>
        <h3>Lets Choose Your Choice</h3>
        <div className="cat-ul"></div>
      </div>
      <div className="ctgry-list" >
        <div className="ctgry-images">
         <a href="#cold-coffee"><h3>cold coffee</h3></a>         
          {/* <img src="../../../../public/kids.jpg" alt="" /> */}
          </div>
        <div className="ctgry-images">
       <a href="#hot-coffee"> <h3>hot coffee</h3></a>
          {/* <img src="../../../../public/gym.jpg" alt="" /> */}
          </div>
        <div className="ctgry-images">
        <a href="#women"><h3>Tea</h3></a>
          {/* <img src="../../../../public/men (1).jpg" alt="" /> */}
          </div>
        {/* <div className="ctgry-images">
       <a href="#Gym"> <h3>Gym Wear</h3></a>
          </div> */}
      </div>
       
    </div>


    {/* collecttions */}

    <div className="categoreis-products">
     <div className="cat-product-heading">
     <h3 id='hot-coffee'>Hot Coffee</h3>
      <div className="cat-ul"></div>
     </div>
  
    <div className="collection-cards">
   {
     getProducts.filter((data) => data.category === 'hot coffee')
     .map((data, index) => (
       <Link className='link' key={index} to={`/proddetailcust/${data._id}`}>
         <div className="Card"><div className="prdct-thumnalil"><img src={data.banner} alt="" /></div>
     <div className="card-details">
     <p className='item-title'>{data.name}</p>
     <div><span className="prdct-description">{data.title}</span></div>
    <div className="prices">
    <div><p className='price'>₹ {data.price}</p></div>
    <div><strike><p className='og-price'>₹ 799</p></strike></div>
    </div>
     </div>
      </div>
       </Link>
     ))
   }
    </div>
    
    </div>


    <div className="categoreis-products">
     <div className="cat-product-heading">
     <h3 id='cold-coffee' >Cold Coffee</h3>
      <div className="cat-ul"></div>
     </div>
  
    <div className="collection-cards">
   {
     getProducts.filter((data) => data.category === 'cold coffee')
     .map((data, index) => (
       <Link className='link' key={index} to={`/proddetailcust/${data._id}`}>
         <div className="Card"><div className="prdct-thumnalil"><img src={data.banner} alt="" /></div>
     <div className="card-details">
     <p className='item-title'>{data.name}</p>
     <div><span className="prdct-description">{data.title}</span></div>
    <div className="prices">
    <div><p className='price'>₹ {data.price}</p></div>
    <div><strike><p className='og-price'>₹ 799</p></strike></div>
    </div>
     </div>
      </div>
       </Link>
     ))
   }
    </div>
    
    </div>
{/* ...................................................................................... */}

<div className="why-london-tea">
<div className="london-tea">
  <div className="london-tea-left">
<h3>Why Franchise London Coffee??</h3>
<h6>

London Coffee gives an entrepreneur the best of both worlds – the ability to own their franchise business, and ongoing access to support in marketing, advertising, recruiting, retention, training, management, and business. Planning. In addition, they have the power of an international brand working for them, 24 hours a day, 7 days a week, to bring them more business.
<p>
The ongoing business relationship we provide within the London coffee franchise includes the service, the products, and trademarks, as well as the entire business concept itself from marketing strategy, plan, Standard Operating Procedure, systems, formats, audits, billing software, training, quality control, ongoing assistance, guidance and supervision. In short, it provides small business (the franchisee) with the tools of big business (provided by the franchisor).
</p>
</h6>
  </div>

  <div className="london-tea-right">
  <div className="london-tea-img">
      <img src="/londoncoffee.webp" alt="" />
  </div>

  </div>
</div>
<Fotter/>
</div>
 


   </div>
   
  )
}

export default Home
