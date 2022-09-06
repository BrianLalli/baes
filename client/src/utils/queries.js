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
      connections {
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      notes {
        content
        date
      }
    }
  }
`;

export const QUERY_NOTES = gql`
  query getNotes {
    notes {
      _id
      title
      content
      date
    }
  }
`;