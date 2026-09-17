import  Sequelize, { Model }  from "sequelize";

class Product extends Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                price: Sequelize.INTEGER,
                path: Sequelize.STRING,
                url:{
                    type: Sequelize.VIRTUAL,
                    get(){
                        return `http://localhost:3001/product-file/${this.path}`;
                    },
                },
            },
            {
                sequelize,
                tableName: 'products'
            },
        );
    
        return this;  
    }

    static associate(models){
        this.belongsTo(models.Category,{
            foreignKey: 'category_id',
            as: 'category',
        });
    }



}

export default Product;    //// -> Quando declara a classe static ou init , nao pode exportada instanciada como: "new Product()"




//Campo Virtual 

//get -> produto -> SEQUELIZE busca produto -> Monta campo virtual com os dados dos produtos 