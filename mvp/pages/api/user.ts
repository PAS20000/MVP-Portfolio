import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import connect from '../../src/utils/mongo'

const handler = nc({})

.post( async (req:NextApiRequest, res:NextApiResponse) => {
   
   const { name, email, image } = req.body  

   try {
        const { db } = await connect()
        const find = await db.collection('users').findOne({
            email
        })
        if(find){
            return res.status(200).json({message:'Email has already been registered'})
        }
        const response = await db.collection('users').insertOne({
            name,
            email,
            image,
            createdAt: new Date()
        })
        console.log(response)

    return res.status(201).json({})
    
   } catch (e) {
    
    return res.status(500).json({error:"User not Created"}), console.log(e)
   }
})


export default handler