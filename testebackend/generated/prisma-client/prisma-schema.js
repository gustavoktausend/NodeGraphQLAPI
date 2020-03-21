module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregatePlanet {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createPlanet(data: PlanetCreateInput!): Planet!
  updatePlanet(data: PlanetUpdateInput!, where: PlanetWhereUniqueInput!): Planet
  updateManyPlanets(data: PlanetUpdateManyMutationInput!, where: PlanetWhereInput): BatchPayload!
  upsertPlanet(where: PlanetWhereUniqueInput!, create: PlanetCreateInput!, update: PlanetUpdateInput!): Planet!
  deletePlanet(where: PlanetWhereUniqueInput!): Planet
  deleteManyPlanets(where: PlanetWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Planet {
  id: ID!
  name: String!
  mass: Float!
  hasStation: Boolean!
}

type PlanetConnection {
  pageInfo: PageInfo!
  edges: [PlanetEdge]!
  aggregate: AggregatePlanet!
}

input PlanetCreateInput {
  id: ID
  name: String!
  mass: Float!
  hasStation: Boolean!
}

type PlanetEdge {
  node: Planet!
  cursor: String!
}

enum PlanetOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  mass_ASC
  mass_DESC
  hasStation_ASC
  hasStation_DESC
}

type PlanetPreviousValues {
  id: ID!
  name: String!
  mass: Float!
  hasStation: Boolean!
}

type PlanetSubscriptionPayload {
  mutation: MutationType!
  node: Planet
  updatedFields: [String!]
  previousValues: PlanetPreviousValues
}

input PlanetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlanetWhereInput
  AND: [PlanetSubscriptionWhereInput!]
  OR: [PlanetSubscriptionWhereInput!]
  NOT: [PlanetSubscriptionWhereInput!]
}

input PlanetUpdateInput {
  name: String
  mass: Float
  hasStation: Boolean
}

input PlanetUpdateManyMutationInput {
  name: String
  mass: Float
  hasStation: Boolean
}

input PlanetWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  mass: Float
  mass_not: Float
  mass_in: [Float!]
  mass_not_in: [Float!]
  mass_lt: Float
  mass_lte: Float
  mass_gt: Float
  mass_gte: Float
  hasStation: Boolean
  hasStation_not: Boolean
  AND: [PlanetWhereInput!]
  OR: [PlanetWhereInput!]
  NOT: [PlanetWhereInput!]
}

input PlanetWhereUniqueInput {
  id: ID
}

type Query {
  planet(where: PlanetWhereUniqueInput!): Planet
  planets(where: PlanetWhereInput, orderBy: PlanetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Planet]!
  planetsConnection(where: PlanetWhereInput, orderBy: PlanetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlanetConnection!
  node(id: ID!): Node
}

type Subscription {
  planet(where: PlanetSubscriptionWhereInput): PlanetSubscriptionPayload
}
`
      }
    