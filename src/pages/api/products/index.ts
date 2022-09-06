import { products } from "../../../constant/products";

export default async function handler(req:any,res:any) {
    res.status(200).json(products);
}