import express from 'express';
const todoRouter = express.Router();
import todo from '../../../src/com/todo/dao/DataSourceManager.js'

todoRouter.get("/svc/todo/getAll",async(req, res) => {
    res.json(todo.getAllTodos());
});
  
todoRouter.delete("/svc/todo/deleteAllTodo",async(req, res) => {
    todo.deleteAllTodos();
    res.status(res.statusCode).send("Deleted  all todos successfully");
});
  
todoRouter.delete("/svc/todo/deleteTodo/:id",async(req, res) => {
    todo.deleteTodo(req.params?.id);
    res.status(res.statusCode).send("Deleted todo successfully");
});

todoRouter.post("/svc/todo/saveTodo", async (req, res) =>{
    todo.saveTodo(req["body"]);
    res.status(res.statusCode).send("Todo Edited successfully");
});

todoRouter.put("/svc/todo/updateTodo", function (req, res) {
    console.log(req["body"]);
    todo.updateTodo(req["body"]);
    res.status(res.statusCode).send("Todo updated successfully");
});

export default todoRouter;