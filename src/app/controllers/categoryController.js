import * as Yup from 'yup';
import Category from '../models/category.js';

class CategoryController {
    async store(request , response){

       const schema = Yup.object({
        name: Yup.string().required(),
      });
    
      try{
       schema.validateSync(request.body, {abortEarly:false });
      } catch(err) {
       return response.status(400).json({error: err.errors});
      }

     const { name } = request.body;
     
     if(!request.file){
      return response.status(400).json({error: 'Imagem é obrigatoria.'});
     }

     const { filename } = request.file;

     const existingCategory = await Category.findOne({where: {name}});

     if(existingCategory) {
      return response.status(409).json({error: 'Categoria já existe.'});
     }

    

    try {
    const newCategory = await Category.create({ name , path: filename ,});
    return response.status(201).json(newCategory);
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return response.status(409).json({ error: 'Categoria já existe.' });
    }
    console.error(err); 
    return response.status(500).json({ error: 'Erro interno ao criar categoria.' });
  }

    }  
    
    async index(_request , response){
        const categories = await Category.findAll();

        return response.status(200).json(categories);
    }
  
}

export default new CategoryController(); 