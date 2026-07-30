import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  prodName: String,
  prodPrice: Number,
  prodDesc: String,
  prodRating: Number,
  prodImage: String,
});




const Product = mongoose.model('Product', productSchema);
export default Product;