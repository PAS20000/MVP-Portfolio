import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import Auth from '../../src/utils/auth'
import connect from '../../src/utils/mongo'

const handler = nc({})

.options((req:NextApiRequest, res:NextApiResponse) => {
    return res.status(200).json({M:true})
})

export default handler