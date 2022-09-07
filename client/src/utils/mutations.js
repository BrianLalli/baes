import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation Mutation($username: String, $email: String, $allergies: String, $hobbies: String, $faveFoods: String, $hateFoods: String, $phobias: String, $birthday: String) {
  updateUser(username: $username, email: $email, allergies: $allergies, hobbies: $hobbies, faveFoods: $faveFoods, hateFoods: $hateFoods, phobias: $phobias, birthday: $birthday) {
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
}
`;


export const DELETE_USER = gql`
mutation Mutation($user: ID!) {
  deleteUser(user: $user) {
    username
  }
}
`;



//add connection
export const ADD_CONNECTION = gql`
mutation AddConnection($user: ID!) {
  addConnection(user: $user) {
    username
    connections {
      username
    }
  }
}
`;


// //delete connection
export const DELETE_CONNECTION = gql`
mutation DeleteConnection($user: ID!) {
  deleteConnection(user: $user) {
    _id
    connections {
      _id
    }
  }
}
`;



// //add note
export const ADD_NOTE = gql`
  mutation addNote($id: ID!, $note: Notes!) {
    addNote(userId: $id, note: $note) {
      user {
        _id
        notes
      }
    }
  }
`;

// //update notes
export const UPDATE_NOTE = gql`
  mutation updateNote($note: Notes!) {
    updateNote(note: $note) {
      user {
        _id
        notes
      }
    }
  }
`;

// //remove notes
export const REMOVE_NOTE = gql`
  mutation removeNote($note: Notes!) {
    removeNote(note: $note) {
      user {
        _id
        notes
      }
    }
  }
`;


