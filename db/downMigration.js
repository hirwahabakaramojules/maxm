import pool from "../config/config";

pool.on("", () => console.log("migrating down and deleting all tables"));

const dropTables = () => {
  const dropTodoTables = `DROP TABLE IF EXISTS TODO `;

  try {
    pool.query(dropTodoTables);
    console.log("done deleting tables");
  } catch (error) {
    console.log(error);
  }
};
dropTables();
