//still need to add all NOT required fields
//allergies
//foods i love
//foods i hate
//birthday
//phobias
//hobbies
//connections [array of other users]


const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
    allergies: String
    faveFoods: String
    hateFoods: String
    phobias: String
    hobbies: String 
    connections: [ User ]
  }

  type Notes {
    _id: ID
    title: String
    content: String
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
    addUser(
      username: String
      email: String!
      password: String!
      firstName: String!
      lastName: String!): Auth
      
      login(
        email: String!
        password: String!): Auth
  }

  
`;

module.exports = typeDefs;
