import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import connect from '../../utils/mongo'

const handler = nc({})

handler.post( async (req:NextApiRequest, res:NextApiResponse) => {
   
   const { name, email, image, productName, category, price, productImage } = req.body  

   try {
        const { db } = await connect()
        const find = await db.collection('users').findOne({
            email,
            name
        })
        if(find){

        const response = await db.collection('products').insertOne({
            productName,
            category,
            price,
            productImage,
            user: { 
                name,
                email,
                image,
            },
            createdAt: new Date()
        })
            console.log(response)

            return res.status(201).json({})

        } else {
            return res.status(401).json({error:'Product not Created'})
        }
    
   } catch (e) {
    
    return res.status(500).json({error:"Product not Created, crash server"}), console.log(e)
   }
})


export default handler