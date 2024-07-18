const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 3031;

const tasks = require('./routes/task');

app.use(tasks);

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});
