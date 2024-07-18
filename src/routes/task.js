const express = require("express");
const router = express.Router();
//crud operation lli hene create, read,update, delete

//Read
router.get('/tasks', (req, res)=>{
    return res.status(200).json({
        taskID: 1,
        taskText: 'Finish React with Hassan'
    });
});

//Create
router.post('/tasks', (req,res)=>{
    const body = req.body;
    return res.status(200).json({
        msg: 'Task Created'
    });
});

//Update
router.put('tasks',(req,res)=>{
    const body = req.body;
    return res.status(200).json({
        msg: 'Task Updated'
    });
});

//Delete
router.delete('tasks',(req,res)=>{
    const body = req.body;
    return res.status(200).json({
        msg: "Task Deleted"
    });
});

module.exports = router;
