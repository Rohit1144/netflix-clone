import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if(req.method != 'GET') {
        return res.status(405).end()
    }

    try {
        
        await serverAuth(req, res)

        const movies = await prismadb.movie.findMany()

        return res.status(200).json(movies)

    } catch (error) {
        console.log(error)
    }

}