const registerService = require("../services/registerService");

const registerController = async (req,res) => {

    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(400).json({'message': 'Username and Password are required'});
    }

    try {
        const data = await registerService(username, password.toString());
        res.status(201).json({'message' : data});
    } catch (error) {
        res.status(500).json({'message': error.message});
    }

}

module.exports = registerController