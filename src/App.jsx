import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from './COMPONENTS/ADMIN/ADMINLOGIN/AdminLogin'
import AdminRegistration from './COMPONENTS/ADMIN/ADMINRESTRATION/AdminRegistration'
import Adminhome from './COMPONENTS/ADMIN/ADMIN HOME/Adminhome'
import Forgotepswd from './COMPONENTS/FORGOT/Forgotepswd'

import AddCategory from './COMPONENTS/ADMIN/ADMIN CATEGERY/AddCategory'
import Adminproduct from './COMPONENTS/ADMIN/ADMIN PRODUCT/Adminproduct'
import Home from './COMPONENTS/HOME/Home'
import Editcategory from './COMPONENTS/EDITCATEGORY/Editcategory'
import ProductViewCatVise from './COMPONENTS/ADMIN/PRODUCT VIEW/ProductViewCatVise'
import CustomerLogin from './COMPONENTS/USER/CustomerLogin'
import ProductdetailsAdm from './COMPONENTS/ADMIN/PRODUCT DETAILS/ProductdetailsAdm'
import Editproduct from './COMPONENTS/ADMIN/EDIT PRODUCT/Editproduct'
import Customerreg from './COMPONENTS/USER/CUSTOMER REGISTRATION/Customerreg'
import Productdetailcst from './COMPONENTS/USER/PRODUCT DETAILS CUST/Productdetailcst'
import Allproducts from './COMPONENTS/USER/ALL PRODUCTS/Allproducts'
import Cart from './COMPONENTS/USER/CART/Cart'
import Wishlist from './COMPONENTS/USER/WISHLIST/Wishlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<BrowserRouter>
<Routes>
  <Route path='/adminregistration' Component={AdminRegistration}/>
  <Route path='/adminlogin' Component={AdminLogin}/>
  <Route path='/adminhome' Component={Adminhome}/>
  <Route path='/Forgotpswd' Component={Forgotepswd}/>
  <Route path='/adminhome' Component={Adminhome}/>
  <Route path='/addcategory' Component={AddCategory}/>
  <Route path='/addproduct' Component={Adminproduct}/>
  <Route path='/' Component={Home}/>
  <Route path='/editcategory/:id' Component={Editcategory}/>
  <Route path='/prooood/:category' Component={ProductViewCatVise}/>
  <Route path='/customerlogin' Component={CustomerLogin}/>
  <Route path='/admproddetails/:id' Component={ProductdetailsAdm}/>
  <Route path='/editProduct/:id' Component={Editproduct}/>
  <Route path='/customerreg' Component={Customerreg}/>
  <Route path='proddetailcust/:id' Component={Productdetailcst}/>
  <Route path='/allproducts' Component={Allproducts}/>
  <Route path='/addtocart/:id' Component={Cart}/>
  <Route path='/addtowishlist/:id' Component={Wishlist}/>


  
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
