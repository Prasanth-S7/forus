import express from 'express';
const router = express.Router();
import { goods } from './routes/goods.js';
import { inventory } from './routes/inventory.js';
import { manager } from './routes/inventoryManager.js';
import { auth } from './middlewares/auth.js';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();
export const JWT_SECRET = process.env.JWT_SECRET;
const app = express()
app.use(express.json())
app.use(cors())
app.use('/inventory',auth, inventory)
app.use('/goods', auth, goods)
app.use('/manager', manager)
app.get('/api/v1/dashboard',auth, (req,res)=>{
    res.json({msg:"welcome to the dashboard"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})