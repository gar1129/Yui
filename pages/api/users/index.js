import { Prisma } from "../../config/db";


export default async function handler(req, res){

    switch(req.method){
        case"GET" :
            return await getUser(req, res);
    }
}

const getUser = async (req, res) => {

        const result = await prisma.user.findMany();
}