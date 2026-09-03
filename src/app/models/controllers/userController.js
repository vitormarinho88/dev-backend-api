/*
store => cria dado
index => lista todos os dados
show => listar um dado
update => atualiza dados
delete => remover dados 
-->> Esses valores não podem ser duplicados <<--
*/

import { v4 } from "uuid";
import User from "../user.js";
import * as Yup from 'yup';  //////// Validação de segurança , se caso errar requisições. Texto no lugar de booleano, o yup conserta
import bcrypt from 'bcrypt';  //////Filtro de segurança , transforma senha conversional "vitor123" em "jdbajidawbsdansjbcxkjasbn" algo aleatorio


class UserController {
    
   async store(request , response){
    
   const schema = Yup.object({
     name: Yup.string().required(),
     email: Yup.string().email().required(),
     password: Yup.string().min(6).required(),
     admin: Yup.boolean(),
   });

   try {
     schema.validateSync(request.body, {abortEarly:false , strict: true});
   } catch(err) {
    return response.status(400).json({error: err.errors});
   }


    const {name, email, password, admin} = request.body;   //desestruturação
   
 
    const existingUser = await User.findOne({
        where:{
            email,
        }
    });

    if (existingUser){
        return response 
        .status(400)
        .json({message: 'Este e-mail ja está cadastrado!'});
    }

    ////O bcrypt também adiciona um salt automático (um valor aleatório por senha) embutido no próprio hash, 
    // o que impede ataques de "rainbow table" (tabelas pré-computadas de hash de senhas comuns)
    //  e faz com que duas pessoas com a mesma senha "vitor123" gerem hashes completamente diferentes no banco.

    const password_hash =  await bcrypt.hash(password, 10);  
 

    const user = await User.create({
        id: v4(),
        name,
        email,
        password_hash,
        admin,
    });

    return response.status(201).json(user)({
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
    });

    }
}

export default new UserController();