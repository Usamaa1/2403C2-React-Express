import Product from "../models/ProductModel.mjs";

export const addProduct = async (req, res) => {
    try {

        const { prodName, prodPrice, prodDesc, prodRating } = req.body;
        console.log(req.body);
        await Product.insertOne({ prodName, prodPrice: Number(prodPrice), prodDesc, prodRating: Number(prodRating), prodImage: req.file.path });
        res.send({ successMessage: "Product Added successfully!", data: {prodName, prodPrice, prodDesc, prodRating, prodImage: req.file.path} })

    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error })
    }
}
export const viewProduct = async (req, res) => {
    try {
        res.send(await Product.find())

    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error })
    }
}