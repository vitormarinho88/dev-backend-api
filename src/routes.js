import { Router } from "express";
import multer from "multer";
import userController from './app/controllers/userController.js';
import sessionController from './app/controllers/sessionController.js';
import productController from './app/controllers/productController.js';
import multerConfig from './config/multer.cjs';
import authMiddleware from "./middlewares/auth.js";
import categoryController from './app/controllers/categoryController.js';
import adminMiddleware from "./middlewares/admin.js";


const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', userController.store);
routes.post('/session', sessionController.store); 


routes.use(authMiddleware);
routes.post('/products',adminMiddleware, upload.single('file'), productController.store);
routes.put('/products/:id', adminMiddleware , upload.single('file'), productController.update);
routes.get('/products', productController.index);

routes.post('/categories', adminMiddleware, upload.single('file') ,categoryController.store);
routes.put('/categories/:id', adminMiddleware, upload.single('file'), categoryController.update);
routes.get('/categories', categoryController.index);


export default routes;