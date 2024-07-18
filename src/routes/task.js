const express = require("express");
const router = express.Router();

router.get('/tasks', (req, res)=>{
    return res.status(200).json({
        taskID: 1,
        taskText: 'Finish React with Hassan'
    });
});

router.post('/tasks', (req,res)=>{
    const body = req.body;
    return res.status(200).json({
        msg: 'Task Created'
    });
});

router.put('tasks',(req,res)=>{
    const body = req.body;
    return res.status(200).json({
        msg: 'Task Updated'
    });
});

router.delete('tasks',(req,res)=>{
    const body = req.body;
    return res.status(200).json({
        msg: "Task Deleted"
    });
});

module.exports = router;