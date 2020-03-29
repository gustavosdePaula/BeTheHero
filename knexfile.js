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
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL,
      user:"rellvcsnukwxwn",
      password: "3ea3d8974f683e79e6a5b163eeca634615eb0c430fff74c8755dd9e7e8f9c02c"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: 'migrations'
    },
    useNullAsDefault: true,
    ssl:true
  }

};
