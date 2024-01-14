const axios = require("axios");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const decode = (req) => {
  const token = req.cookies.jwt;
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  return decoded.userId;
}


const getTaskList = async (req, res) => {
    const userId = decode(req);
    try {
      const { data } = await axios.get(
        `http://localhost:3002/v1/tasks/task-list/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const creatTask = async (req, res) => {
  const {task} = req.body;
  const userId = decode(req);
  try {
    const { data } = await axios.post(
      `http://localhost:3002/v1/tasks/task`, {
        userId: userId,
        task: task,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const userId = decode(req);
  const {taskId} = req.params;
  const {task, status} = req.body;
  try {
    const { data } = await axios.put(
      `http://localhost:3002/v1/tasks/task/${userId}/${taskId}`, {
        task:task,
        status, status,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const {taskId} = req.params;

  try {
    const { data } = await axios.delete(
      `http://localhost:3002/v1/tasks/${taskId}/task`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = {getTaskList, creatTask, updateTask,  deleteTask};
