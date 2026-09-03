module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432 , 
    username: 'admin',
    password: '123456',
    database: 'dev-backend-db',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },

};

//docker start dev-backend-api ---> RODAR O BANCO DE DADOS BEEKEEP 