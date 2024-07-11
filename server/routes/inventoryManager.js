import express from 'express'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { auth } from '../middlewares/auth.js'
export const manager = express.Router()
const prisma = new PrismaClient();
manager.post('/login', async (req, res) => {

    const { username, password } = req.body;
    try {
        const isExistingManager = await prisma.inventory.findFirst({
            where: {
                inventoryManager: username
            }
        })
        if (isExistingManager === null) {
            res.status(401).json({
                msg: "Invalid Username"
            })
            return;
        }
        if (isExistingManager.password === password) {
            const token = jwt.sign(req.body, "secret", {expiresIn:"1h"})
            res.status(200).json({
                token
            })
            return;
        }
        else{
            console.log(isExistingManager.password)
            console.log(password)
            res.status(401).json({
                msg:"Invalid Password"
            })
            return;
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Internal Server Error"
        })
        return;
    }
})

manager.get('/inventoryaccess/:id', async (req, res)=>{
    const token  = req.params.id;
    const userDetails = jwt.decode(token);
    console.log(userDetails)
    const user = await prisma.inventory.findFirst({
        where:{
            inventoryManager:userDetails.username,
            password:userDetails.password
        },
        select:{
            setUpInventoryAccess:true
        }
    }).catch((err)=>{
        return res.json({
            msg:"Internal Server Error"
        })
    })
    console.log(user.setUpInventoryAccess)
    if(user.setUpInventoryAccess){
        return res.status(200).json({
            access:true
        })
    }
    return res.json({
        access:false
    })
})