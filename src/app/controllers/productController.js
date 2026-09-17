import * as Yup from 'yup';
import Product from '../models/product.js';
import Category from '../models/category.js';


class productController {
  async store(request , response){

       const schema = Yup.object({
        name: Yup.string().required(),
        price: Yup.number().required(),
        category_id: Yup.number().required(),
     });
    
   
    let validData;
    try{
       validData = schema.validateSync(request.body, {abortEarly:false });
    } catch(err) {
     return response.status(400).json({error: err.errors});
    }


     const { name, price, category_id } = validData;
     const { filename } = request.file;
 
    try{
        const newProduct =  await Product.create({name, price, category_id, path: filename });
        return response.status(201).json(newProduct);
    }catch(err){
        console.error('DB ERROR:', err.stack);
        return response.status(500).json({error: 'Failed to create product'});
    }
    
 }
   
    
    async index(_request , response){
        const products = await Product.findAll({
            include: {
                model: Category ,
                as: 'category',
                attributes: ['id', 'name'],
            },
        });

        return response.status(200).json(products)
    }
}


export default new productController(); 