const axios = require('axios');

const loginAndRegisterController = async(req,res) => {

    const {username, password} = req.body;

    if( req.path === '/registration' || req.path === '/login' ) {
        try {
          const {data } = await axios.post(`http://localhost:3000/v1/users/${req.path}`, {
            username:username,
            password: password,
        }, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
          res.status(201).json(data);
        } catch (error) {
          res.status(500).json({"message": error.message});
        }
    }
}

module.exports = loginAndRegisterController;