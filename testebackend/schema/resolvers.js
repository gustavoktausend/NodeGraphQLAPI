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

module.exports = resolvers;