import Sequelize, { Model } from "sequelize";

class User extends Model {
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email:Sequelize.STRING,
                password_hash: Sequelize.STRING,      //TRASNFORMA A SENHA EM HASH "$2b$10$K8..." MESMO QUE SENHA É FEITA EM STRING
                admin: Sequelize.BOOLEAN,
            },
            {
                sequelize,
                tableName: 'users'
            },
        );
    
        return this;  
    }
}

export default User;