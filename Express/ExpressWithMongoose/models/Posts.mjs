import mongoose from 'mongoose';
const { Schema } = mongoose;

mongoose.Schema.Types.Number.cast(false);

const postSchema = new Schema({
  postTitle: String,
  postDesc: String,
  postLikes:  Number
});




const Post = mongoose.model('Post', postSchema);
export default Post;