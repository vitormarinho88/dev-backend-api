import express from 'express';
import routes from './routes.js'
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json()); // primeiro: prepara req.body      
app.use(express.urlencoded({extended:true}));
app.use('/product-file', fileRouteConfig);
app.use('/category-file', fileRouteConfig);

app.use(routes);  // depois: rotas que dependem de req.body

export default app;   




