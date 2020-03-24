const { gql } = require('apollo-server');
const typeDefs = gql`
type Query {
    suitablePlanets: [Planet!] !
}

type Mutation {
    installStation(planetName: String!) : Station
}

type Planet {
    id: ID!
    name: String!
    mass: Float
    hasStation: Boolean!
}
    
type Station {
    id: ID!,
    planetName: String!
}   
    
`;

module.exports = typeDefs;