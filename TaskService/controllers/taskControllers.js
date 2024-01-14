const { createTaskService, getTaskListService, updateTaskService, deleteTaskService} = require("../service/taskServices");


const statusList = ["Todo", "In progress", "Done"];

const getTaskList = async (req, res) => {
    const {userId} = req.params;
    if(!userId) {
        return res.status(400).json({'message': 'there is no userId'});
    }
    try {
        const data = await getTaskListService(userId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({'message': error.message});
    }
}

const createTask = async (req, res) => {
    
    const {userId, task} = req.body;
    const initStatus = "Todo"
    if(!userId) {
        return res.status(400).json({'message': 'there is no userId'});
    }

    if(!task) {
        return res.status(400).json({'message': 'write some task'});
    }

    try {
        const data = await createTaskService(userId, task, initStatus);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({'message': error.message});
    }
}

const updateTask = async(req, res) => {
    const {taskId} = req.params;
    const {task, status} = req.body;

    if(!taskId) {
        return res.status(400).json({'message': 'Fail to update task'});
    }

    if(!task && !status) {
        return res.status(400).json({'message': 'there is nothing to update'});
    }

    if(!statusList.includes(status) && status) {
        return res.status(400).json({'message': 'the status is wrong'});
    }

    try {
        const data = await updateTaskService(taskId, task, status);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({'message': error.message});
    }
}

const deleteTask = async (req, res) => {
    
    const {taskId} = req.params;
    
    if(!taskId) {
        return res.status(400).json({'message': 'no taskID'});
    }

    try {
        const data = await deleteTaskService(taskId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({'message': error.message});
    }
}

module.exports = {createTask, getTaskList, updateTask, deleteTask}