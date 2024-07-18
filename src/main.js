//3melna express app
const express = require("express");
const app = express();
app.use(express.json());

//wasalna lport mnl .env hek shi
require("dotenv").config();
const PORT = process.env.PORT || 3031;
//wasalna lroutes
const tasks = require('./routes/task');

app.use(tasks);
//bta3tine aya port fet7a bas 2a3ml start
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});
