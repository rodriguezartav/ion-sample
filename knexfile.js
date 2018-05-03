module.exports = {

  development: {
    debug: false,
    client: 'postgresql',
    connection: {
      host: "localhost",
      database: "nihu",
      user: "",
      password: ""
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: "org.cgpi5eyst5ag.us-east-1.rds.amazonaws.com",
      database: "nihu-staging",
      user: "ion",
      password: process.env.DB_PASSWORD,
      ssl: true
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: "org.cgpi5eyst5ag.us-east-1.rds.amazonaws.com",
      database: "nihu",
      user: "ion",
      password: process.env.DB_PASSWORD,
      ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
