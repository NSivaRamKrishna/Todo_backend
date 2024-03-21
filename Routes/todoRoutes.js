const express = require('express');
const todoController = require('../controllers/todoController');
const router=express.Router();

router.post('/todo/add/:id', todoController.addTodo);
router.get('/todo/:id',todoController.getTodo);
router.post('/todo/remove/:id', todoController.removeTodo);
router.post('/todo/update/:id',todoController.updateTask);
module.exports=router;
