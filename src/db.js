

import mongoose from "mongoose";



async function connectDB() {
    try{
    const connectDB=await mongoose.connect(process.env.MONGO_URI, {
        dbName: 'food_order_app'
    })
    //console.log(`MongoDB connected:${connectDB.connection.host}`)
    }catch(error){console.log(`error in connecting to db:${error}`)}
}

export { connectDB } 