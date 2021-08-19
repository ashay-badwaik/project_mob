const { gql } = require('apollo-server');

const typeDefs = gql`
  type UserDetails{
    id: ID!
    name: String
    bio: String
    imagePath: String
  }

  type Query {
    getAllUserDetails: [UserDetails]!
    getUserDetails(id:ID!): UserDetails!
  }

  type Mutation {
    addUser(name:String! bio:String!): String!
    uploadImage(id:ID! path:String!): String!
    uploadPath(id:ID! path:String!): String!
  }
`

module.exports = typeDefs;