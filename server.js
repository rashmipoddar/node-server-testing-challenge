const express = require('express');

const blogRoutes = require('./data/blogsRoute');

const server = express();

server.use(express.json());
server.use('/blogs', blogRoutes);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'sanity check', environment: process.env.DB_ENV });
});

module.exports = server;