import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

import User from "./Models/User.js"
import Order from './Models/Order.js'
import Cart from './Models/Cart.js'
import Fooditem from "./Models/Fooditem.js"

//import Auth from './Auth.js'

const Signup=async(req,res)=>{
    const {name,email,password,number}=req.body
    //console.log(`in the Signup function`)
    if(!name || !email || !password || !number){
        res.status(400).json({error:'User details missing'})
        return
    }
    try {
        const searchUser=await User.findOne({email:email})
        if(searchUser!==null) {
            res.status(400).json({error:'User already exists'})
            return
        }
        const saltRounds=10
        const hashedPassword=await bcrypt.hash(password,saltRounds)
        const userCreation=await User.create({name,email,password:hashedPassword,number})
        
        res.status(201).json({message:'User created'})
    } catch (error) {
        console.log(`${error}`)
        res.status(500).json({error:'Internal server error'})
    }
}

const Signin=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        res.status(400).json({error:'Data missing'})
        return
    }
    try {
        const user=await User.findOne({email:email})
        if(user===null){
            res.status(400).json({error:'User doesnt exist'})
            return
        }
        const comparePassword=await bcrypt.compare(password,user.password)
        if(!comparePassword){
            res.status(400).json({error:'Invalid password'})
            return
        }
        
        //console.log(cart,orders)
        const token=jwt.sign({userId:user._id},'secret_key')
        res.status(200).json({token:token,message:'Successfully logged in'})

    } catch (error) {
        console.log(`${error}`)
        res.status(500).json({error:'Internal server error'})
    }
}

const Home=async (req,res)=>{
    const userId=req.userId
    const user=await User.findOne({_id:userId})
    const {name,email,number}=user
    const cart=await Cart.findOne({userId:user._id}) || {arrayOfItems:[]}
    const orders=await Order.find({userId:user._id}) || []
    const modifiedOrders=orders.map(order=>({arrayOfItems:order.arrayOfItems,createdAt:order.createdAt}))
    const fooditems=await Fooditem.find({}) 
    res.status(200).json({userDetails:{name,email,number},cart:{arrayOfItems:cart.arrayOfItems},orders:modifiedOrders,fooditems:fooditems})
}


const PlaceOrder=async(req,res)=>{
    const userId=req.userId
    const {order}=req.body
    const modefiedOrder=order.map(e=> ({foodId:e.foodId,quantity:e.quantity}))
    try {
        const orderAdded=await Order.create({userId:userId,arrayOfItems:[...modefiedOrder]})
        const cartCleared=await Cart.findOneAndUpdate({userId:userId},
            {userId:userId,arrayOfItems:[]},{upsert:true})
        res.status(201).json({message:'New order created'})
        return
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal server error'})
    }
}

const addTocart =async(req,res)=>{
    const userId=req.userId
    const {arrayOfItems}=req.body
    try {

        const response=await Cart.findOneAndUpdate({userId:userId},
            {userId:userId,arrayOfItems:arrayOfItems},{upsert:true})
        res.status(201).json({message:'Cart modified !'})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal server errror'})
    }
}

const Orders=async (req,res)=>{
    const userId=req.userId
    try {
        const orders=await Order.find({userId:userId})
        res.status(200).json({orders:[...orders]})

    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal server error'})
    }
}
export {Signup,Signin,Home,PlaceOrder,addTocart,Orders}