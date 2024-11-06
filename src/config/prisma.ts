import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
    log : ['query', 'info', 'warn', 'error']
})

export async function initPrismaClient() {
    try {
        await prisma.$connect()
        console.log("success connected to database with prisma")
    } catch (error) {
        console.error("error :",error)
        await prisma.$disconnect()
    }
    
}


