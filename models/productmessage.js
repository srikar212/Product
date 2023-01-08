import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    Product_Image:String,
    Product_Name:String,
    Product_Price: Number,
});
const productmessage=mongoose.model('productmessage',postSchema);
export default productmessage