import { Router } from "express";
import * as controller from "./controller.js"
import Auth from "./Auth.js";

const router=Router();

router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/adminhome").get(Auth,controller.home);
router.route("/Forgotpswd").patch(controller.adminFrgtPwd);

// CATEGORY PAGE
router.route("/addcategory").post(controller.myCategory);
router.route("/getcategory").get(controller.getCategory);

router.route("/delcategory/:id").delete(controller.delCategory)
router.route("/addproduct").post(controller.AddProducts)
router.route("/getCatDetails/:id").post(controller.getCatDetails);
router.route("/editCategory/:id").patch(controller.editCategory);

router.route("/getCatWiseProducts/:category").get(controller.getCategoryWisedProduct);
router.route("/delProduct/:id").delete(controller.delProduct);

router.route("/getAllProducts").get(controller.getAllProducts);
router.route("/getProduct/:id").get(controller.getProduct);
router.route('/editproduct/:id').patch(controller.editProduct)

// customer

router.route('/addcustomer').post(controller.addCustomer)
router.route('/logincustomer').post(controller.loginCustomer)
router.route('/customerhome').get(Auth,controller.customerHome)
router.route('/getcustproduct/:id').get(controller.getProductcust)


// cart
router.route("/addtocart").post(controller.Addtocart)
router.route("/getCartProduct/:id").get(controller.getCartProduct);
router.route("/delCartProduct/:id").delete(controller.delCartProduct);
router.route("/delAlltProduct/:id").delete(controller.deleteAllProducts);
router.route("/placeOrder/:id").post(controller.placeOrder);

router.route("/updateCartItem/:prodId").patch(controller.editQuantity);

// wishlist
router.route("/addToWhishList").post(controller.AddToWishList);
router.route("/getWishlistProduct/:id").get(controller.getWishlistProduct);
router.route("/delWishListProduct/:id").delete(controller.delwishListProduct);








export default router;