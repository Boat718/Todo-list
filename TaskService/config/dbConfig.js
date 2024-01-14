module.exports = {
    HOST: "localhost",
    USER: "username",
    PASSWORD: "password",
    DB: "taskdb",
    dialect: "postgres",
    PORT:5431,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };