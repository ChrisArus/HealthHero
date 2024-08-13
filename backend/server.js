// backend/server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
require('dotenv').config();

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/db');

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

db();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}${server.graphqlPath}`);
});
