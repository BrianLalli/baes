const { gql } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    password: String
    email: String
    allergies: String
    hobbies: String 
    faveFoods: String
    hateFoods: String
    phobias: String
    birthday: String
    connections: [ User ]
    notes: [ Notes ]
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
    me: User
  }

  type Mutation {
    
    login(
      email: String!
      password: String!): Auth
    

    addUser(
      username: String!
      email: String!
      password: String!
      allergies: String
      faveFoods: String
      hateFoods: String
      birthday: String
      phobias: String
      hobbies: String 
      ): Auth

   
    updateUser(
      username: String, 
      email: String
      allergies: String
      hobbies: String 
      faveFoods: String
      hateFoods: String
      phobias: String
      birthday: String
      ): User

    deleteUser(
      user: ID!
    ): User



    addConnection(
      user: ID!
    ): User


    deleteConnection(
      user: ID!
    ): User

    addNote(
      userId: ID!
      note: String
    ): User
  
    updateNote(
      userId: ID!
      content: String
    ): User
    
    removeNote(
      userId: ID!
      content: String
    ): User
  
  }
`;

module.exports = typeDefs;
