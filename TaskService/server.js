const express = require('express')
const app = express()

const db = require("./config/sequelizeConfig.js");
const taskRouter = require('./routes/taskRoute.js');
const port = 3002

db.sequelize.sync()
    .then(()=> {
        console.log("Synced db");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
app.use(express.json());

app.use('/v1/tasks/', taskRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))