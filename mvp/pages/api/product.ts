import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import connect from '../../src/utils/mongo'
import upload from '../../src/utils/upload'


const handler = nc({})

.use(upload.single('file'))

.post( async (req:NextApiRequest, res:NextApiResponse) => {
   
   const { email, productName, category, price } = req.body  

   try {
        const { db } = await connect()
        const find = await db.collection('users').findOne({
            email
        })
        if(find){

        const response = await db.collection('products').insertOne({
            productName,
            category,
            price,
            productImage: req.file.location,
            email,
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

export const config = {
    api :{
        bodyParser: false,
    },
};

export default handler