const  express = require('express')
const cookieParser = require("cookie-parser");
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter.js');
const db = require("./config/sequelizeConfig.js");

const app = express()
const port = 3000

db.sequelize.sync()
    .then(()=> {
        console.log("Synced db");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/v1/users/', registerRouter);
app.use('/v1/users/', loginRouter);

app.get('/test', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))