import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function Auth(req:NextApiRequest, res:NextApiResponse, next: () => void) {
    const session = await getSession({ req })
    console.log(session)
    if(session){
        next()
    } else {
        return res.status(403).json({error:'Auth Error'})
    }
}