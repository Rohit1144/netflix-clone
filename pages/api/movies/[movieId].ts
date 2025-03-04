import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'GET') {
        return res.status(405).end()
    }

    try {
        await serverAuth(req, res)
        
        const {movieId} = req.query

        if(typeof movieId !== 'string') {
            throw new Error('Invalid movieId')
        }
        if(!movieId) {
            throw new Error('movieId is required')
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })

        if(!movie) {
            throw new Error('Movie not found')
        }

        return res.status(200).json(movie)

    } catch (error) {
        console.log(error)
    }
}