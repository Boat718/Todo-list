const taskControllers = require('../controllers/taskControllers');
const { route } = require('./loginAndRegisterRoutes');


const router = require('express').Router();

router.get('/task-list/:userId', taskControllers.getTaskList);
router.post('/task', taskControllers.creatTask);
router.put('/task/:userId/:taskId', taskControllers.updateTask);
router.delete('/:taskId/task', taskControllers.deleteTask);

module.exports = router;