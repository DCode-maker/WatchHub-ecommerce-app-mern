import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import {  createProductController, braintreeTokenController,  deleteProductController, 
    getProductController, getSingleProductController, productCategoryController, productCountController, productFilterController, productListController, 
    productPhotoController, relatedProductController, searchProductController, updateProductController, brainTreePaymentController } from '../controllers/productController.js';
import formidable from 'express-formidable'
// 
const router  =  express.Router()

//routes

router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)




// get products
router.get('/get-product', getProductController);


//single-products
router.get('/get-product/:slug', getSingleProductController)

// get photo
router.get('/product-photo/:pid',productPhotoController);

//delete product

router.delete('/delete-product/:pid',deleteProductController)

// update product

router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)

//filter product

router.post('/product-filters', productFilterController)

// product count

router.get('/product-count', productCountController)

//product per page

router.get('/product-list/:page', productListController)


// seacrh product

router.get('/search/:keyword',searchProductController)

// similar products route

router.get('/related-product/:pid/:cid', relatedProductController)


/// category wise

router.get('/product-category/:slug', productCategoryController)


//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;