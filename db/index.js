const { Pool } = require("pg");

const pool = new Pool({
  user: "aflor",
  host: "localhost",
  database: "yelp",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
