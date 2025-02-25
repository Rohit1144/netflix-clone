import React from "react";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'GET'){
        return res.status(405).end();
    }
    
    try {
        await serverAuth(req);

        const movie_count = await prismadb.movie.count();
        const random_number = Math.floor(Math.random() * movie_count);

        const random_movie = await prismadb.movie.findMany({
            take: 1,
            skip: random_number,
        })

        return res.status(200).json(random_movie[0]);
        
        
    } catch (error) {
        console.log(error)
        return res.status(401).end();
    }
}