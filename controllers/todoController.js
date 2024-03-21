const Usertask = require('../models/usertask');

exports.addTodo = async(req,res)=>{
    const { id } = req.params;
    const { content, created_at, completed_at, status } = req.body;
    try{
        const newTodo = await Usertask.create({
            taskid: id,
            content: content,
            created_at: created_at,
            completed_at: completed_at,
            status: status
        });
        res.status(200).json({ message: "Task added successfully", newTodo: newTodo });
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to add data"});
    }
}
exports.getTodo = async(req,res)=>{
    const{ id } = req.params;
    try{
        const todo = await Usertask.findAll({where:{taskid: id}});
        res.status(200).json({todo:todo});
    }catch(error){
        console.error("==>>",error);
        res.status(500).json({message:"Failed to get data"});
    }
}
exports.removeTodo = async(req,res)=>{
    const{id} = req.params;
    try{
        await Usertask.destroy({where:{id:id}});
        res.status(200).json({message:"Data removed"});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to remove data"});
    }
}
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { content, created_at, completed_at, status } = req.body;
    try {
      const updateTodo = await Usertask.update(
        {
          content: content,
          created_at: created_at,
          completed_at: completed_at,
          status: status
        },
        { where: { id: id } }
      );
      res.status(200).json({ message: "Data updated successfully", updateTodo:updateTodo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update data" });
    }
  };
  