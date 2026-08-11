import jwt from 'jsonwebtoken'

export const authMiddleware = (req,res,next)=>{


    
    try {
        console.log(req.cookies)
        const {token} = req.cookies; 
        
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        console.log('Verified Token: ',verifiedToken)
        if(verifiedToken){

            req.user = verifiedToken;

            next();
        }
        else{
            res.send({message: "No token provided!"})
        }


        console.log("Middleware function works")
    } catch (error) {
        console.log(error)
    }


}


