const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {
    // Create a new user called `Alice`
    const newPlanet = await prisma.createPlanet({
            name: 'Terra',
            hasStation: true,
            mass: 11.2
        }
    )
    console.log(`Created new planetoso: ${newPlanet.name} (ID: ${newPlanet.id})`)

    // Read all users from the database and print them to the console
    const allPlanets = await prisma.planets()
    console.log(allPlanets)
}

main().catch(e => console.error(e))
