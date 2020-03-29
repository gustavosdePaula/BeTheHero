// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.test.sqlite'
    },
    migrations:{
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: './src/database/db.sqlite',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  }

};
