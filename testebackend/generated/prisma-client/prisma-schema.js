module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateStation {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createStation(data: StationCreateInput!): Station!
  updateStation(data: StationUpdateInput!, where: StationWhereUniqueInput!): Station
  updateManyStations(data: StationUpdateManyMutationInput!, where: StationWhereInput): BatchPayload!
  upsertStation(where: StationWhereUniqueInput!, create: StationCreateInput!, update: StationUpdateInput!): Station!
  deleteStation(where: StationWhereUniqueInput!): Station
  deleteManyStations(where: StationWhereInput): BatchPayload!
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

type Query {
  station(where: StationWhereUniqueInput!): Station
  stations(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Station]!
  stationsConnection(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StationConnection!
  node(id: ID!): Node
}

type Station {
  id: ID!
  planetName: String!
}

type StationConnection {
  pageInfo: PageInfo!
  edges: [StationEdge]!
  aggregate: AggregateStation!
}

input StationCreateInput {
  id: ID
  planetName: String!
}

type StationEdge {
  node: Station!
  cursor: String!
}

enum StationOrderByInput {
  id_ASC
  id_DESC
  planetName_ASC
  planetName_DESC
}

type StationPreviousValues {
  id: ID!
  planetName: String!
}

type StationSubscriptionPayload {
  mutation: MutationType!
  node: Station
  updatedFields: [String!]
  previousValues: StationPreviousValues
}

input StationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StationWhereInput
  AND: [StationSubscriptionWhereInput!]
  OR: [StationSubscriptionWhereInput!]
  NOT: [StationSubscriptionWhereInput!]
}

input StationUpdateInput {
  planetName: String
}

input StationUpdateManyMutationInput {
  planetName: String
}

input StationWhereInput {
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
  planetName: String
  planetName_not: String
  planetName_in: [String!]
  planetName_not_in: [String!]
  planetName_lt: String
  planetName_lte: String
  planetName_gt: String
  planetName_gte: String
  planetName_contains: String
  planetName_not_contains: String
  planetName_starts_with: String
  planetName_not_starts_with: String
  planetName_ends_with: String
  planetName_not_ends_with: String
  AND: [StationWhereInput!]
  OR: [StationWhereInput!]
  NOT: [StationWhereInput!]
}

input StationWhereUniqueInput {
  id: ID
}

type Subscription {
  station(where: StationSubscriptionWhereInput): StationSubscriptionPayload
}
`
      }
    