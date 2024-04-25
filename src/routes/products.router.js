import { Router } from 'express';
import { deleteProductController, getProductIdController, getProductsController, newProductController, updateProductController } from '../controllers/products.Controller.js';
import { uploader } from '../../utils.js';

const router = Router();

//Ruta que nos muestra todos los productos
router.get('/', getProductsController)

//Ruta que nos muestra un producto especifico dado su id(params)
router.get('/id/:pid', getProductIdController)

//Ruta para agregar un producto. Funciona con Moongose :)
router.post('/', uploader.array('files'), newProductController)

//Ruta para actualizar un producto. Funciona con Moongose :)
router.put('/:pid', updateProductController)

//Ruta para eliminar un producto. Funciona con Moongose :)
router.delete('/:pid', deleteProductController)

export default router;