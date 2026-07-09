export const imageController = (req, res)=>{


    try {
        

        if(!req.file){
            res.send({message: "No file uploaded"})
        }else{
            console.log(req.file);
            res.send({sucessMessage: "Image uploaded successfully!",imagePath: req.file.path});

        }



    } catch (error) {
        console.log(error);
        res.send({errorMessage: error.message})
    }




}