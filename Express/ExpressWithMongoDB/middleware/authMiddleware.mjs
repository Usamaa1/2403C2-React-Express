import jwt from 'jsonwebtoken'

export const authMiddleware = (req,res,next)=>{


    let authHeaderToken = req.headers.authorization;


    console.log(authHeaderToken)

    authHeaderToken = authHeaderToken.split(' ')[1];

    try {

        const verifiedToken = jwt.verify(authHeaderToken, process.env.JWT_SECRET_KEY);

        console.log('Verified Token: ',verifiedToken)
        if(verifiedToken){

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


