import { Schema,model} from 'mongoose'


const OrderSchema= new Schema({
    userId:{type:Schema.Types.ObjectId,required:true},
    arrayOfItems:[{
        foodId:Number,
        quantity:Number
    }]
},{ timestamps: true })

const Order= model('Order',OrderSchema)

export default Order