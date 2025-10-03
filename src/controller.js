import express from 'express'
import { Signup,Signin,Home,PlaceOrder,addTocart,Orders } from './routes.js'

import Auth from './Auth.js'

const router= express.Router()

router.post('/foodOrder/createUser',Signup)
router.post('/foodOrder/login',Signin)
router.get('/foodOrder/',Auth,Home)
router.post('/foodOrder/placeOrder',Auth,PlaceOrder)
router.post('/foodOrder/addTocart',Auth,addTocart)
router.post('/foodOrder/orders',Auth,Orders)
export {router}