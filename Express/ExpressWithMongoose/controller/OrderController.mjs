import Orders from "../models/Orders.mjs";




export const addOrder = async (req, res) => {
    try {

        await Orders.insertOne(req.body);
        res.send({ successMessage: "Orders Added successfully!" })

    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error })
    }
}


export const viewOrder = async (req, res) => {
    try {



        const fullOrder = await Orders.aggregate([
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "productDetails"

                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "userDetails"

                }
            },
            {
                $project: {
                    qty:1,
                    status:1,
                    "productDetails.prodName": 1,
                    "productDetails.prodPrice": 1,
                    "productDetails.prodDesc": 1,
                    "productDetails.prodRating": 1,
                    "productDetails.prodImage": 1,
                    "userDetails.username": 1,
                    "userDetails.email": 1,
                }
            }

        ])





        res.send(fullOrder)

    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error })
    }
}