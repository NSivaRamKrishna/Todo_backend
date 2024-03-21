const express=require('express');
const taskController = require('../controllers/taskConroller');
const router=express.Router();

router.post('/task/add/:id',taskController.addTask);
router.get('/task/:id',taskController.getTask);
router.post('/task/remove/:id',taskController.removeTask);
router.post('/task/update/:id',taskController.updateTask);
module.exports=router;