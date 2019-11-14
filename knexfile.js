// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/blogs.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testBlogs.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  }

};
