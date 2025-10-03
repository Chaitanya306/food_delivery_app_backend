import {Schema,model} from 'mongoose';

const foodSchema= new Schema({
    foodId:{type:Number,require:true},
    name:{type:String,require:true},
    image:{type:String,require:true},
    category:{type:String,require:true},
    price:{type:Number,require:true},
    type:{type:String,require:true},
    description:{type:String,require:true}

}, { timestamps: true })

const Fooditem= model('Fooditem',foodSchema)

export default Fooditem