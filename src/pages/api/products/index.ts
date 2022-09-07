import { products } from "../../../constant/products";

export default async function handler(req:any,res:any) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {method} = req;
    
    switch(method) {
        case 'GET':
            setTimeout(() => {
                res.status(200).json(products)
            },100)
            
        break;
        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE']);
            break;
    }
    
    
}