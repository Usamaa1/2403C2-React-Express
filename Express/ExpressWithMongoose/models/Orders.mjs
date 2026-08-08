import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const ordersSchema = new Schema({
 productId: ObjectId,
 qty: Number,
 userId: ObjectId,
 status: String
});




const Orders = mongoose.model('Orders', ordersSchema);
export default Orders;