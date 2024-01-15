const express = require('express')
const notificationController = require('./Controller')
const  {consumeFrom}= require('./Consumer')
const app = express()
const port = 3003

consumeFrom();

app.get('/v1/notification/:userId', notificationController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
