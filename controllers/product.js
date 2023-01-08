import productmessage from '../models/productmessage.js';
export const getProducts=async (_req,res)=>{
    try {
       const productmessages=await productmessage.find();
       res.status(200).json(productmessages);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createProducts=async(req,res)=>{
    const products=req.body;
    const newproducts=new productmessage(products);
    try{
        await newproducts.save();
        res.status(201).json(newproducts);
    }
    catch(error){
        res.status(409).json({
            message:error.message
        });
    }

}