import express from "express";
import { urlencoded } from "body-parser";
import cors from "cors";
import pool from "./config/config";
const app = express();
app.use(express.json());
app.use(cors());

urlencoded({ extended: false });
pool
  .connect()
  .then(() => console.log("succefully connected to db"))
  .catch((err) => console.log(err))
  .finally(() => pool.end());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to maxm app",
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("app started on port 5000"));
