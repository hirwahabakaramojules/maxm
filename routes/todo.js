import express from "express";
import pool from "../config/config";
import querries from "../models/querries";

const router = express();

router.get("/", async (req, res) => {
  try {
    const todos = await pool.query(querries.getTodos);
    res.status(200).json(todos.rows);
    console.log(todos.rows);
  } catch (error) {
    res.status(500).json({
      message: `sorry the server is undergoing maintance please wait a while till its finished`,
    });
  }
});

router.post("/addTodo", async (req, res) => {
  try {
    const { description, title } = req.body;
    const newTodo = await pool.query(querries.createTodo, [title, description]);
    res.status(200).json(newTodo.rows[0]);
    console.log(newTodo[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/deleteTodo/:id", (req, res) => {
  res.json({ message: `deleted a todo with id of ${req.params.id}` });
});

router.put("/updateTodo/:id", (req, res) => {
  res.json({ message: `updated a to todo with the id of ${req.params.id}` });
});

router.get("/:id", (req, res) => {
  res.json({
    message: `returned todo with id of ${req.params.id}`,
  });
});

export default router;
