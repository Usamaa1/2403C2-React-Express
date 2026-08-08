import Post from "../models/Posts.mjs";

export const addPost = async (req,res)=>{
    try {

        await Post.insertOne(req.body);
        res.send({successMessage: "Post Added successfully!"})

    } catch (error) {
        // console.log(error);
        
        console.log("console error",error.errors.postLikes.name)
        
        if(error.errors.postLikes.name == "CastError"){
            
            res.send({error: "Post Likes is not a valid number!"})
        }
        res.send({errorMessage: error})

    }
}
export const viewPost = async (req,res)=>{
    try {
        res.send(await Post.find())

    } catch (error) {
        console.log(error);
        res.send({errorMessage: error})
    }
}