import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import connect from '../../src/utils/mongo'
import upload from '../../src/utils/upload'

const handler = nc({})

.get(async (req:NextApiRequest, res: NextApiResponse): Promise<void> => {
        try {
            const { db } = await connect()
            const products = await db.collection('products').find({}).toArray()

            return res.status(201).json({ products })
        } catch (e) {

            return res.status(500).json({ error: 'Server error, products not find' }), console.log(e)
        }
    })

.use(upload.single('file'))

.post( async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {

        const { email, productName, category, price } = req.body

        try {
                const { db } = await connect()
                const findUser = await db.collection('users').findOne({
                    email
                })
                if(findUser){

                const response = await db.collection('products').insertOne({
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
                    createdAt: new Date()
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