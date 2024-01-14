const loginService = require("../services/loginService");

const loginController = async (req,res)=> {
    const {username, password} = req.body;
    if(!username || !password) {
        res.status(401).json({"message":"input username and password"});
    }

    try {
        const data = await loginService(username, password.toString());
        if(!data) {
            res.status(401).json({ error: 'Authentication failed' });
        }
        res.cookie("jwt", data.token, {
            httpOnly: true,
            maxAge: 3*60*40*1000,
        });
        res.status(200).json({
            "message":"login successfully",
            "data": data
        });

    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

module.exports = loginController;