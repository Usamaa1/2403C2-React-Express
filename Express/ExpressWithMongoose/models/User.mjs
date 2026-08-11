import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
 username: String,
 email: String,
 password: String
});




const Users = mongoose.model('Users', usersSchema);
export default Users;