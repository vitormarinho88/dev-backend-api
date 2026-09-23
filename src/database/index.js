import { Sequelize } from "sequelize";
import databaseConfig from "../config/database.cjs";
import User from "../app/models/user.js";
import Product from "../app/models/product.js";
import Category from "../app/models/category.js";
import mongoose from "mongoose";                ///ORM DO MONGO DB

const models = [User , Product , Category];


class Database {
    constructor(){
        this.init();
        this.mongo();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);
        models
        .map((model) => model.init(this.connection))
        .map((model) => model.associate && model.associate(this.connection.models),   ////-> Alteração no biome para utilizar operadores ternarios "&&"
       );
    }
    
    mongo(){
    this.mongooseConnection = mongoose.connect(
        'mongodb://localhost:27017/devbackend',
    );
 }

}


export default new Database();