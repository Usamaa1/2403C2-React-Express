export const checkController = (req,res)=>{
    try{
        res.send(req.user)
    }
    catch(e){
        res.send({errorMessage: e})
    }
}