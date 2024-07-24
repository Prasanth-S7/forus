import express from "express"
import { Prisma, PrismaClient } from "@prisma/client"
export const camp = express.Router()
const prisma = new PrismaClient()
camp.get('/getcampdetails', async (req, res)=>{
    try{
        const camp = await prisma.camp.findMany({
            select:{
                id:true,
                name:true,
                latitude:true,
                longitude:true,
                totalCapacity:true,
                currentCapacity:true,
                address:true,
                createdAt:true,
                updatedAt:true,
                Good:true
            }
        });
        res.status(200).json(camp);
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg:"Internal Server Error"
        })
    }
})

camp.post('/addgoods', async (req, res)=>{
    const { id, goods } = req.body;
    try{
        const res = await prisma.camp.update({
            where:{
                id:id
            },
            data:{
                Good:goods
            }
        })
        res.status(200).json({
            msg:"goods added successfully"
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg:"Internal Server Error"
        })
    }
})