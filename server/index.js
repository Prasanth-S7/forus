import express from 'express';
const router = express.Router();
import { goods } from './routes/goods.js';
import { inventory } from './routes/inventory.js';
import cors from 'cors';
const app = express()
app.use(express.json())
app.use(cors())
app.use('/inventory', inventory)
app.use('/goods', goods)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});