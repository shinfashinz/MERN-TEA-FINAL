import React, { useEffect, useState } from 'react'
import './Productdet.scss'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const Productdetailcst = () => {
    let product_id
    const [loading, setLoading] = useState(true);

    const{id}=useParams()
    const [msg,setmsg]=useState("")
    const [cartItems, setCartItems] = useState([])
    const [wishlistItems, setWishlistItems] = useState([])
    const value=JSON.parse(localStorage.getItem('customer_token'));
    const[getProduct,setProduct]=useState({
      cust_id:"",
    prod_id:"",
    name:"",
    category:"",
    description:"",
    quantity:"",
    price:"",
    banner:""
    })


    const getName=async()=>{
      const res=await axios.get("http://localhost:4078/api/customerhome",{
        headers:{Authorization:`Bearer ${value}`},

      })
      setmsg(res.data)
      console.log(msg.id);
    }
    useEffect(()=>{
      getName();
    },[])
  
     ////////button change

    //  cart
  useEffect(() => {
    if (msg) {
      getPrdctDetails();
     
    }
  }, [msg])
    const getPrdctDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:4078/api/getCartProduct/${id}`);
        setCartItems(res.data);
        console.log("hai",res.data);
        // console.log("All prod_id in cartItems:", cartItems.map(item => item.prod_id));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setLoading(false);
      }
  
    };
  
    useEffect(() => {
      getPrdctDetails();
    }, []);

    // wish

    useEffect(() => {
      if (msg) {
        getWishdetails();
       
      }
    }, [msg])

    const getWishdetails = async () => {
      try {
        const res = await axios.get(`http://localhost:4078/api/getWishlistProduct/${id}`);
        setWishlistItems(res.data);
        // console.log("All prod_id in cartItems:", cartItems.map(item => item.prod_id));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setLoading(false);
      }
  
    };
  
    useEffect(() => {
      getWishdetails();
    }, []);


  

    const getproduct=async()=>{
      const res=await axios.get(`http://localhost:4078/api/getcustproduct/${id}`)
      setProduct(res.data)
      product_id = res.data._id
      // console.log(res.data);
      // console.log(getProduct.images[0]);
    
    }
    useEffect(()=>{
      getproduct();
  },[])



  const addToCart = async () => {
    try {
      const res=await axios.post("http://localhost:4078/api/addtocart",{...getProduct, cust_id:msg.id, prod_id: getProduct._id});
      console.log(res.data);
      if(res){
        alert("Added To cart")
      }else{
        alert("Error adding product to cart. Please try again.")
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
        alert("Error adding product to cart. Please try again."); 
    }
  };

  const addtowishlist=async()=>{
    try {
      const res=await axios.post("http://localhost:4078/api/addToWhishList",{...getProduct, cust_id:msg.id, prod_id: getProduct._id});
      console.log(res.data);
      if(res){
        alert("Added To wishlist")
      }else{
        alert("Error adding product to wishlist. Please try again.")
      }
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
        alert("product already added."); 
    }
  }

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
                   {
                    cartItems.map(item=> item.prod_id).includes(getProduct._id) ?(
                        <Link className='edit-btn' to={`/cart/${msg.id}`}>go to cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Link>
                    ):(
                       <Link className='edit-btn' onClick={addToCart}>Add to cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Link>
                    )
                   }
                 {wishlistItems.map(item => item.prod_id).includes(getProduct._id)?(
                   <Link className='wishlist-btn' to={`/addtowishlist/${msg.id}`} >Go to Wishlist <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                   <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                 </svg></Link>
                 
                 ):(
                  <Link className='wishlist-btn' onClick={addtowishlist} >Add to Wishlist <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                </svg></Link>
                 )
                }
             
                   </div>

                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetailcst
