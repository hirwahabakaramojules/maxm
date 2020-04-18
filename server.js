import express from "express";
import { urlencoded } from "body-parser";

const app = express();
app.use(express.json());

urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to maxm app",
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("app started on port 5000"));
