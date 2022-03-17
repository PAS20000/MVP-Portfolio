import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import connect from '../../src/utils/mongo'

const handler = nc({})

handler

.post( async (req:NextApiRequest, res:NextApiResponse) => {
   
   const { email } = req.body  

   try {
        const { db } = await connect()
        const find = await db.collection('users').findOne({
            email:email
        })
        
       if(find.email === "pedro.augusto.schroeder@gmail.com"){
           return res.status(200).json({message:'Hellow PAS'})
        } else {
            return res.status(403).json({message:'Not Auth'})
        }
    
   } catch (e) {
    
    return res.status(500).json({error:"Server Error"}), console.log(e)
   }
})


export default handler