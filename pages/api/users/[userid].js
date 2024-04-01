import { Prisma } from "@prisma/client";

export default async function handler (req, res){


    switch (req.Method){
        case "GET" :
                return await getUser(req, res)
    }
}

const getUser = async (req, res) =>{

    try{
        const {userId} = req.query ;
        const result = await Prisma.user.findFirst({
            where: {
                id: {
                    equals: parseInt(userId)
                }
            }
        })

        return res.status(200).json(result);
        
    }catch (error){
        return res.status(500).json(error.message);
    }
}