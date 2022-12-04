const jwt = require("jsonwebtoken");
const SECRET_KEY = "iamgroot"

const verifyToken = (req,res,next)=>{

    let token = req.headers.authorization;
    if(token){
        token = token.split(' ')[1];
        let user = jwt.verify(token,SECRET_KEY);
        req.userId = user.id
/*yaha req property ke andar ek new property add ho gayi hogi userId
user.id  me id ye get kiye hai jb hmlog user ko signup/signin krwa rhte te aur token generate ke liye user:result._id
aur email:result.email me set krwaye the wo wla hai
is id ki through user ka sara details get kr skte hai*/

    }else{
        return res.status(401).json({message:"unauthorized User"})
    }

    next();
}
module.exports = verifyToken;