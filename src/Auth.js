import jwt from 'jsonwebtoken'



const Auth =async (req,res,next)=>{
    const token = req.headers['authorization'];
    
   const authenticated= await jwt.verify(token,'secret_key')
   if(!authenticated) {
    res.status(400).json({error:'Authentication failed'})
    return
   }
   const {userId}=authenticated
   req.userId=userId
   next()

}

export default Auth