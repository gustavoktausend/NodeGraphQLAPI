const { ApolloServer } = require('apollo-server');
const { prisma } = require('./generated/prisma-client');
const typeDefs = require('./schema');
const PlanetAPI = require('./resources/PlanetAPI');

async function main() {

    const resolvers = {
        Query: {
            suitablePlanets(_source, _args, { dataSources }) {
                return dataSources.planetAPI.getPlanets(10);
            }
        },
        Mutation: {
            async installStation(_source, _args, {dataSources, ...context }) {
                try {
                    const planet = await dataSources.planetAPI.getSuitablePlanet(_args.planetName);
                    if(!!planet) {
                        return context.prisma.createStation({planetName: planet.name});
                    }
                } catch (e) {
                    console.error(e)
                }
            }
        }
    };

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => {
            return { planetAPI: new PlanetAPI() }
        },
        context: {prisma,},
    });

    server.listen().then(({ url }) => {
        console.log(`  Server ready at ${url}`);
    });

}

main().catch(e => console.error(e));
