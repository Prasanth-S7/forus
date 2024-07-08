import express from 'express';
export const goods = express.Router();
goods.get('/', (req, res) => {
    res.json({
        msg: "in goods route"
    }
    )
})