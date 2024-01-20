import React, {useState,useEffect}from 'react';
// import './Editcategory.scss'
import { Link, useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'

const Editcategory = () => {

    const navigate=useNavigate()
    const {id}=useParams()
    const [val,setVal]=useState({
        category:"",
        aboutCategory:""
    })
    const GetData=(e)=>{
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        // console.log(val);
    }
    const getfullData = async () => {
        try {
            const res = await axios.post(`http://localhost:4078/api/getCatDetails/${id}`);
            // console.log(res);
            setVal(res.data);
            // console.log(val);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getfullData(id);
    }, [id]);

    const EditCat=async(e)=>{
        e.preventDefault()
      try {
        const res=await axios.patch(`http://localhost:4078/api/editCategory/${id}`,{...val})
        console.log(res.data);
        if(res.status!=404){
            alert("Edited")
            navigate("/adminhome")
        }
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div>
      
    </div>
  )
}

export default Editcategory
