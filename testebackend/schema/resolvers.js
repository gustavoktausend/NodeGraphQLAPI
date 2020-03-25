const resolvers = {
    Query: {
        // se usar arrow function fica um ticadinho mais curto hehe
        suitablePlanets: (_source, _args, { dataSources }) => dataSources.planetAPI.getPlanets(10)
    },
    Mutation: {
        // podemos desestruturar e pegar o prisma também
        async installStation(_source, _args, { dataSources, prisma }) {
            try {
                const planet = await dataSources.planetAPI.getSuitablePlanet(_args.planetName);
                if(!!planet) {
                    return prisma.createStation({planetName: planet.name});
                }
            } catch (e) {
                // se der erro o que retornamos pro cliente?
                // talvez seria mais interessante ter um error handling mais descritivo
                // que diga o que pode ter acontecido
                console.error(e)
            }
        }
    }
};

module.exports = resolvers;