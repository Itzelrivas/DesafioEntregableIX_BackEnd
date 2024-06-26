import dotenv from 'dotenv';
dotenv.config();

// Exportamos las variables de entorno
export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
};