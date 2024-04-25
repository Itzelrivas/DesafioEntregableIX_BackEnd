import { Router } from 'express';
import { addProductToCartController, createCartsController, deleteProductToCartController, deleteProductsCartController, getCarPopController, getCartsController, updateCantProductsController, updateProductsCartController } from '../controllers/carts.Controller.js';

const router = Router();

//Ruta que muestra todos mis carritos con population
router.get('/', getCartsController)

//Ruta para crear un nuevo carrito
router.post('/', createCartsController)

//Params que me muestra un carrito específico con population
router.get('/:cid', getCarPopController)

//Ruta que agrega un producto especifico a un carrito específico
router.post('/:cid/product/:pid', addProductToCartController)

//Ruta que elimina un producto especifico de un carrito específico
router.delete('/:cid/product/:pid', deleteProductToCartController)

//Params para eliminar de un carrito específico, todos sus productos. Funciona con moongose :)
router.delete('/:cid', deleteProductsCartController)

//Ruta que modifica la cantidad de productos de un tipo específico en un carrito
router.put('/:cid/product/:pid', updateCantProductsController)

//Ruta que modifica el array completo de products de un carrito específico
router.put('/:cid', updateProductsCartController)

export default router; 
