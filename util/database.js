import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// Read the PostgreSQL secret connection information
// (host, database, username password) from the .env file
dotenvSafe.config();

function connectOneTimeToDatabase() {
  let sql;
  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    //  has an unauthorized certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

// Perform a first query
export async function getProducts() {
  const products = await sql`SELECT * FROM products`;
  return products.map((product) => camelcaseKeys(product));
}

export async function getAllProducts() {
  const products = await sql`
  SELECT
  *
  FROM
  products
  `;
  return products.map((product) => camelcaseKeys(product));
}

export async function getProductById(id) {
  if (isNaN(parseInt(id))) return undefined;

  const products = await sql`
  SELECT
  *
  FROM
  products
  WHERE
  id = ${id}
  `;
  return products.map((product) => camelcaseKeys(product))[0];
}
