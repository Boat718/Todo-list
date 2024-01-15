const consume = require("./Consumer");


const notificationController = async (req,res) => {
    const {userId} = req.params;
    try {
        const data = consume.saveNotification;
        res.status(200).json({"message": "success getting notification", "data": data});
    } catch (error) {
        res.status(500).json({"message":error.message});
    }

}

module.exports = notificationController