import { Sequelize } from "sequelize";
import databaseConfig from "../config/database.cjs";
import User from "../app/models/user.js";
import Product from "../app/models/product.js";

const models = [User , Product];


class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connections = new Sequelize(databaseConfig)
        models.map((model) => model.init(this.connections));
    }
    
}

export default new Database();