const { gql } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    allergies: String
    faveFoods: String
    hateFoods: String
    birthday: String
    phobias: String
    hobbies: String 
    connections: [ User ]
  }

  type Notes {
    _id: ID
    title: String
    content: String
    date: String
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    login(
      email: String!
      password: String!): Auth
    
    
    addUser(
      username: String!
      email: String!
      password: String!): Auth

   
    updateUser(
      user: ID!
    ): User

    deleteUser(
      user: ID!
    ): Int

    addConnection(
      user: ID!
    ): Auth

    deleteConnection(
      user: ID!
    ): Int

    addNote(
      userId: ID!
      note: String
    ): User
  
    
    updateNote(
      userId: ID!
      title: String
      content: String
    ): User
    
    removeNote(
      userId: ID!
      title: String
      content: String
    ): Int
  
  }
`;

module.exports = typeDefs;
