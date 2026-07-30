import Product from "../models/ProductModel.mjs";

export const addProduct = async (req,res)=>{
    try {

        await Product.insertOne(req.body);
        res.send({successMessage: "Product Added successfully!"})

    } catch (error) {
        console.log(error);
        res.send({errorMessage: error})
    }
}
export const viewProduct = async (req,res)=>{
    try {
        res.send(await Product.find())

    } catch (error) {
        console.log(error);
        res.send({errorMessage: error})
    }
}