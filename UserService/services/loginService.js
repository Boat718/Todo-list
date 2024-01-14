const userdb = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginService = async (username, password) => {

    const user = await userdb.findAll({where: {username: username}});
    const userInfo = user[0]
    if(!user) {
        return user;
    }
    const passwordMatch = await bcrypt.compare(password, userInfo.password);
    if(!passwordMatch) {
        return passwordMatch;
    }

    const token = jwt.sign({"userId":userInfo.userid,"username": userInfo.username},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1h'});
    
    const resData = {
        token: token,
        userId: userInfo.userid,
        username: userInfo.username
    }

    return resData;
    
}

module.exports = loginService;