import React, { useEffect, useState } from 'react'
import './Editproduct.scss'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Editproduct = () => {
    const{id}=useParams();
    const navigate=useNavigate();
  let Images = "";
  let Banner = ""
  const [getCat, setCat] = useState([])
  const [val, setVal] = useState({
    name: "",
    category: "",
    title:"",
    description: "",
    price: "",
    stock: "",
    images: [],
    banner: ""

  })


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
  
  
   const GetBanner=async(e)=>{
      e.preventDefault()
    
      Banner=await convertToBase64(e.target.files[0])
      console.log(Banner);
    }
  
 

  const GetImages = async (e) => {
    e.preventDefault()

    Images = await convertToBase64Images(e.target.files)
    console.log(Images);
    // setVal(Images)
  }



  const GetData = (e) => {
    setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    console.log(val);
  }

  const getproduct=async()=>{
    const res=await axios.get(`http://localhost:4078/api/getproduct/${id}`)
    setVal(res.data)
    console.log(res.data);
    // console.log(getProduct.images[0]);
  
  }
  useEffect(()=>{
    getproduct();
  },[])

  const getCategory = async () => {
    const res = await axios.get("http://localhost:4078/api/getcategory")
    setCat(res.data)
    console.log(getCat);
  }
  useEffect(() => {
    getCategory();
  }, [])



  const editProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`http://localhost:4078/api/editproduct/${id}`, { ...val, images: Images, banner: Banner })
      console.log(res.data);
      if (res.status != 404) {
        alert("Product Editted")
        navigate("/adminhome")

      }
    } catch (error) {
      alert("error")
    }
  }

  return (
    <div>
       <div className='product-edit-main'>
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
  <form onSubmit={editProduct}>

    <div className="field">
      <input id="prodname" placeholder="Product Name" className="input-field" name="name" value={val.name} type="text" onChange={GetData} />
    </div>
    <div className="field">
      <input id="prodname" placeholder="Title" className="input-field" name="title" value={val.title} type="text" onChange={GetData} />
    </div>
    <div className='label'><label htmlFor="">Category :</label></div>
    <div className="field">
    <select name="category" id="category"  className="input-field" onChange={GetData} value={val.category} >
     {
      getCat.map((data,index)=>
        <option value={data.category} key={index}>{data.category}</option>
     )
     }
      </select>
    </div>
    <div className="field">
      <input id="description" placeholder="Description About Product" className="input-field" name="description" type="text" onChange={GetData} value={val.description} />
    </div>
    <div className="field">
      <input id="price" placeholder="Price" className="input-field" name="price" type="text" onChange={GetData} value={val.price} />
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
    <div className='label'><label htmlFor="">Stock :</label></div>
    <div className="field">
    <input class="input__field" name='stock' type="text" placeholder='stock' onChange={GetData} value={val.stock} />
    </div>
    <div className="field">
    <div><label htmlFor="">Banner</label></div>
      <input id="banner" placeholder="banner" className="input-field" name="banner" type="file"  onChange={GetBanner} />
    </div>
    <div className="field">
    <div><label htmlFor="">Images</label></div>
      <input id="image" placeholder="Image" className="input-field" name="images" type="file"  onChange={GetImages}  multiple/>
    </div>
    <button className="btn" type="submit">Add</button>
  </form>
</div>
    </div>
    </div>
  )
}

export default Editproduct
