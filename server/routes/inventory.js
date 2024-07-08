import express from 'express';
import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
export const inventory = express.Router();
const prisma = new PrismaClient()
inventory.post('/addinventory', async (req, res) => {
    const { inventoryName, inventoryAddress, authorityIncharge, inventoryManager, managerAddress, contact, mailId } = req.body;
    console.log(req.body)
    console.log(inventoryName)
    try {
        const inventory = await prisma.inventory.create({
            data: {
                inventoryName: inventoryName,
                inventoryAddress: inventoryAddress,
                authorityIncharge: authorityIncharge,
                inventoryManager: inventoryManager,
                Manageraddress: managerAddress,
                contact: contact,
                mailId: mailId,
            }
        })
        res.json({
            msg: inventory.id
        })
    }
    catch (error) {
        console.log(error)
    }
})

