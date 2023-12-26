import express from 'express';
import{registerController,loginController,testController, forgotPasswordController,updateProfileController, getOrderController, getAllOrdersController, orderStatusController } from '../controllers/authController.js'
import { requireSignIn ,isAdmin} from '../middlewares/authMiddleware.js';


//router object


const router = express.Router()
 
//routing

//register||METHOD POST

router.post('/register',registerController);

//LOGIN || METHOD POST

router.post("/login", loginController);

//Forgot pasword || POST
router.post('/forgot-password',forgotPasswordController)

//test rouetes
                //Checking token //Checking Admin
router.get("/test",requireSignIn,isAdmin,testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
  //protected Admin route auth
  router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

// update profile
router.put('/profile', requireSignIn, updateProfileController);

//orders
router.get('/orders', requireSignIn, getOrderController);

// admin all oders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status
router.put("/order-status/:orderId", requireSignIn,isAdmin, orderStatusController)

export default router;