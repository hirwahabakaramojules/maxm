import pool from "../config/config";

pool.on("", () => console.log("migrating up and creating neccessary tables"));

const tables = () => {
  const todoTables = `CREATE TABLE IF NOT EXISTS TODO (
        id SERIAL PRIMARY KEY UNIQUE,
        title TEXT NOT NULL ,
        description TEXT NOT NULL
    )`;

  try {
    pool.query(todoTables);
    console.log("done creating tables");
  } catch (error) {
    console.log(error);
  }
};
tables();
