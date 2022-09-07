import { getProduct } from "src/constant/controller";

export default async function handler(req:any,res:any) {
    const {method} = req;
    
    switch(method) {
        case 'GET':
            getProduct(req,res);
        break;
        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE']);
            break;
    }
    
    
}