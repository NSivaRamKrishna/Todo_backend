const Task = require('../models/task');

exports.addTask = async(req,res)=>{
    const { id } = req.params;
    const { task } = req.body;
    try{
        const newProject = await Task.create({
            userid:id,
            task:task
        });
        res.status(200).json({message:"Project added Sucessfully"})
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to add project"});
    }
}
exports.getTask = async (req,res)=>{
    const { id } = req.params;
    try{
        const tasks = await Task.findAll({where:{userid : id}});
        res.status(200).json({tasks:tasks});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to fetch data"})
    }
}
exports.removeTask = async (req,res)=>{
    const { id } = req.params;
    try{
         await Task.destroy({where:{id:id}});
        res.status(200).json({message:"Project removed"});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to remove project"});
    }
}
exports.updateTask = async(req,res)=>{
    const { id } = req.params;
    const{ task }= req.body;
    console.log({id, task});
    try{
        await Task.update({task:task},{where:{id:id}});
        res.status(200).json({message:"Data updated sucessfully"});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Failed to update data"});
    }
}