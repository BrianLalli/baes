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
query Query($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    password
    email
    allergies
    hobbies
    faveFoods
    hateFoods
    phobias
    birthday
    connections {
      _id
      username
      password
      email
      allergies
      hobbies
      faveFoods
      hateFoods
      phobias
      birthday
    }
    notes {
      _id
      content
    }
  }
}
`;

export const QUERY_ME = gql`
query Query {
  me {
    _id
    username
    password
    email
    allergies
    hobbies
    faveFoods
    hateFoods
    phobias
    birthday
    connections {
      _id
      username
      password
      email
      allergies
      hobbies
      faveFoods
      hateFoods
      phobias
      birthday
    }
    notes {
      _id
      content
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