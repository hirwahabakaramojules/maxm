import { Client, Pool } from "pg";
import dotEnv from "dotenv";

dotEnv.config();

const con = process.env.DATABASE_DEV;
const pool = new Pool({ connectionString: con });

export default pool;
