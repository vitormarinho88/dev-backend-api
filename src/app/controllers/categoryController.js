import * as Yup from 'yup';
import Category from '../models/category.js';

class CategoryController {
    async store(request , response){

       const schema = Yup.object({
        name: Yup.string().required(),
      });
    
      try{
       schema.validateSync(request.body, {abortEarly:false });///acumula todos os erros em vez de parar no primeiro. Qualquer falha vira 400 com a lista de mensagens.
      } catch(err) {
       return response.status(400).json({error: err.errors});
      }

     const { name } = request.body;
     if(!request.file){                                                   ///Extração de dados
      return response.status(400).json({error: 'Imagem é obrigatoria.'});
     }

     const { filename } = request.file;

     const existingCategory = await Category.findOne({where: {name}});
     if(existingCategory) {                                              ///Checagem de duplicadas , nao fazer com o mesmo nome da category
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
   
   

     async update(request , response){

       const schema = Yup.object({
        name: Yup.string(),
      });
    
      try{
       schema.validateSync(request.body, {abortEarly:false });
      } catch(err) {
       return response.status(400).json({error: err.errors});
      }

     const { name } = request.body;
     const { id } = request.params;

     let path;
     if(request.file){
     const { filename } = request.file;
     path = filename;
     } 
    

     const existingCategory = await Category.findOne({where: {name}});
     if(existingCategory) {                                             
      return response.status(409).json({error: 'Categoria já existe.'});
     }

    

    try {
      await Category.update({ name , path, }, {where:{id,},});
    return response.status(201).json();
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return response.status(409).json();
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