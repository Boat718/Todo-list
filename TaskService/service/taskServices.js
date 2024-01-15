const taskdb = require("../model/taskModel")
const redis = require("redis");
const producerTo = require("./producer");

const redisClient = redis.createClient();
redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.connect();

const getTaskListService = async(userId) => {
    try {
        const key = "user"+userId
        const value = await redisClient.get(key);
        if(value) {
            console.log("send from redis")
            return {'message': 'success getting all task', data: JSON.parse(value)}
        }

        const dataDB = await taskdb.findAll({where: {userid: userId}});
        if(dataDB.length === 0) {
            return 'there is no task for this user';
        }
        redisClient.setEx(key,5*60, JSON.stringify([...dataDB]));
        return {'message': 'success getting all task',
            data: [...dataDB]
            }
        }
    catch (error) {
        return error;
    }
}

const createTaskService = async (userId, task, status) => {
    try {
        await taskdb.create({userid: userId, task: task, status: status});
        return {'message':"task is created"};
    } catch (error) {
        return error;
    }
}

const updateTaskService = async(taskId, task, status) => {
    try {
        if(task) {
            await taskdb.update({task: task}, {where: {taskid: taskId}});
        }
        if(status) {
            await taskdb.update({status: status}, {where: {taskid: taskId}});
            await producerTo(status+taskId,taskId, status);
        }

        return {'message': 'success updating task'};
    } catch (error) {
        return error;
    }
}

const deleteTaskService = async(taskId) => {
    try {
        await taskdb.destroy({
                where: {
                    taskid: taskId
        },
        });

        return {'message': 'success deleting task'};
    } catch (error) {
        return error;
    }
}



module.exports = {createTaskService, getTaskListService, updateTaskService, deleteTaskService}