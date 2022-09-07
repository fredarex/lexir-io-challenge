import { products } from "./products";

export async function getProduct(req:any,res:any) {
    try {
        const {productId} = req.query;
        if(productId) {
            const data = products.filter((product:any) => product.id == productId);
            res.status(200).json({data});
        }
        res.status(404).json({error: 'product not selected'});
    }catch(err) {
        res.status(404).json({error: "cannot get the user"})
    }
}