module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432 , 
    username: 'postgres',
    password: 'postgres',
    database: 'dev-gamers',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },

};

//docker start dev-backend-api ---> RODAR O BANCO DE DADOS BEEKEEP 