const userdb = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10


const registerService = async (username, password) => {
    const hashPassword = await bcrypt.hash(password, saltRounds);
    try {
        await userdb.create({
            username: username,
            password: hashPassword
        })
        return "User registered successfully";
    } catch (error) {
        return error.message;
    }
}

module.exports = registerService