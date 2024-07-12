import express from 'express';
import { PrismaClient } from '@prisma/client';
export const goods = express.Router();
const prisma = new PrismaClient();
goods.post('/addgood', async (req, res) => {
    const { name, type, quantity } = req.body;
    try {
        const inventoryId = await prisma.inventory.findFirst({
            where:{
                inventoryManager:req.userDetails.username,
            },
            select:{
                id:true
            }
        })
        const good = await prisma.good.create({
            data: {
                name: name,
                quantity: quantity,
                type: type,
                inventoryId:inventoryId.id
            }
        })
        res.json({
            id: good.id
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            msg:"Internal Server Error"
        })
    }
})

goods.get('/getgoods', async (req, res) => {
    try {
        const good = await prisma.good.findMany()
        res.status(200).json({
            goods: good
        })
    }
    catch (error) {
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
})