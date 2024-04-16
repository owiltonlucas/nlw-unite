import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '17c1a0f6-567d-4e50-8004-a821d4de4d71',
            title: 'Unite Summit',
            slug: 'unit-summit',
            details: 'Um evento para devs apaixonados por código!',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})