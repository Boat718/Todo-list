const taskdb = require("../model/taskModel")


const getTaskListService = async(userId) => {
    try {
        const data = await taskdb.findAll({where: {userid: userId}});

        if(data.length === 0) {
            return 'there is no task for this user';
        }
        return {'message': 'success getting all task',
            data: [...data]
        }
    } catch (error) {
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