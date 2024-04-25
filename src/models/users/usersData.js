import { userModel } from "./user.model.js"

//Obtenemos el carrito asociado a un usuario específico
export const getCartUser = async (email) => {
    try {
        return await userModel.findOne({ email: email }).populate('cart');
    } catch (error) {
        console.error("Ha surgido este error en models de cart: " + error);
        return error;
    }
}