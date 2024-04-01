import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export default async function handler(req, res){

    switch(req.method){
        case "GET":
            return await getUser(req, res);
        case "POST":
            return await addUser(req, res);
    }
}

const getUser = async (req, res) => {
    try {
        const result = await prisma.user.findMany();
        return res.status(200).json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
}

const addUser = async (req, res) => {
    try {
        const data = {
            username: "abduljabar",
            email: "abduljabar@gmail.com"
        };
        const result = await prisma.user.create({
            data: data
        });
        return res.status(200).json({success: true, result});
    } catch(error) {
        return res.status(500).json(error);
    }
}
