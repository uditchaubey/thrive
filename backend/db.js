const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "thrive",
  password: "261012",
  port: 5432,
});

module.exports = pool;