import { Router } from "express";
import multer from "multer";
import userController from "./app/models/controllers/userController.js";
import sessionController from "./app/models/controllers/sessionController.js";
import productController from "./app/models/controllers/productController.js";
import multerConfig from './config/multer.cjs';
import authMiddleware from "./middlewares/auth.js";

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', userController.store);
routes.post('/session', sessionController.store); 

routes.use(authMiddleware);
routes.post('/products', upload.single('file'), productController.store);
routes.get('/products', productController.index);

export default routes;