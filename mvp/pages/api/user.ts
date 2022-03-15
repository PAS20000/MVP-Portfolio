import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import connect from '../../utils/mongo'


type User = {
    name: String
    email: String
    image: String
    createdAt: Date
}

const handler = nc({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
  })

handler.post( async (req:NextApiRequest, res:NextApiResponse<User>) => {
   
   const { name, email, image } = req.body  

   try {
        const { db } = await connect()
        const find = await db.collection('users').findOne({
            email
        })
        if(find){
            return res.status(401).json({error:'Email has already been registered'})
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