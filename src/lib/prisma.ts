import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query'], // Habilita o log de consultas
});
