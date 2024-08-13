// backend/schemas/index.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      // Fetch users from database
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      // Add user to database
    },
  },
};

module.exports = { typeDefs, resolvers };
