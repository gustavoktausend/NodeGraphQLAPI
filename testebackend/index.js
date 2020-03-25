const { ApolloServer } = require('apollo-server');
const { prisma } = require('./generated/prisma-client');
const typeDefs = require('./schema/schema');
const resolvers = require('./schema/resolvers');
const PlanetAPI = require('./resources/PlanetAPI');

function main() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => ({
            planetAPI: new PlanetAPI()
        }),
        context: { prisma },
    });

    server.listen().then(({ url }) => {
        console.log(`  Server ready at ${url}`);
    });

}

main();
