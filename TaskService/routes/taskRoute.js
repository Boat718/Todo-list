const { createTask, getTaskList, updateTask, deleteTask } = require("../controllers/taskControllers");

const router = require("express").Router();

router.get("/task-list/:userId", getTaskList);
router.post("/task", createTask );
router.put("/task/:userId/:taskId", updateTask);
router.delete('/:taskId/task', deleteTask );

module.exports = router;