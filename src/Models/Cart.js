import {Schema,model} from 'mongoose'


const CartSchema= new Schema({
    userId:{type:Schema.Types.ObjectId,required:true,unique:true},
    arrayOfItems:[{
        foodId:Number,
        quantity:Number
    }]

},{timestamps:true});

const Cart = model('Cart',CartSchema)

export default Cart