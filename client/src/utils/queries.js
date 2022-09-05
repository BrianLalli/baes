import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      allergies
      faveFoods
      hateFoods
      birthday
      phobias
      hobbies
      
    }
  }
`;



export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
    }
  }
`;
