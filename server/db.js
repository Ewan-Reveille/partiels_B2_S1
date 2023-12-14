const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'partiels',
  password: '',
  port: 5432,
});

// Fonction pour exécuter une requête SQL
async function queryDB(queryText, queryParams) {
  const client = await pool.connect();
  try {
    const result = await client.query(queryText, queryParams);
    return result;
  } catch (err) {
    throw err;
  } finally {
    client.release();
  }
}

module.exports = {
  queryDB,
};
