const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');

const loginAndRegisterRoutes = require('./routes/loginAndRegisterRoutes');
const taskRoute = require('./routes/taskRoutes');
const verifyToken = require('./middlewares/auth');

const app = express()
const port = 3001

app.use(cors());

app.use(cookieParser());
app.use(express.json());

app.use("/v1/users/",loginAndRegisterRoutes);

app.use("/v1/tasks", verifyToken, taskRoute )



app.listen(port, () => console.log(`Example app listening on port ${port}!`))