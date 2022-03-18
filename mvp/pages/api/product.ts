import type { NextApiResponse } from 'next'
import nc from 'next-connect'
import Auth from '../../src/utils/auth'
import connect from '../../src/utils/mongo'
import upload from '../../src/utils/upload'

interface NextApiReq {
   file:any,
   email:String,
   productName:String,
   category:String,
   price:String,
   body:any
}

const handler = nc<NextApiReq, NextApiResponse>({})

.get(async (req, res): Promise<void> => {
        try {
            const { db } = await connect()
            const products = await db.collection('products').find({}).toArray()

            return res.status(201).json({ products })
        } catch (e) {

            return res.status(500).json({ error: 'Server error, products not find' }), console.log(e)
        }
    })

.use(Auth,upload.single('file'))

.post( async (req, res): Promise<void> => {

        const { email, productName, category, price } = req.body
       
        try {
                const { db } = await connect()
                const findUser = await db.collection('users').findOne({
                    email
                })
                if(findUser){

                const insert = await db.collection('products').insertOne({
                    productName,
                    category,
                    price,
                    productImage: req.file.location,
                    user:{
                        _id:findUser._id,
                        email,
                        name:findUser.name,
                        image:findUser.image
                    },
                    createdAt: new Date().toLocaleDateString()
                })

                return res.status(201).json({})
            } else {
                return res.status(403).json({error:'Product not Created, email not find'})
            }

        } catch (e) {

            return res.status(500).json({ error: "Product not Created, crash server" }), console.log(e)
        }
    })

export const config = {
    api :{
        bodyParser: false,
    },
};

export default handler