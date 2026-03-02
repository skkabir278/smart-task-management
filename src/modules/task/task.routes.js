const express = require('express');
const router = express.Router();

const protect = require('../../middlewares/auth.middleware');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require('./task.controllers');

// All routes below require authentication
router.use(protect);

// Create task & Get all tasks (with filter + search)
router
  .route('/')
  .post(createTask)
  .get(getTasks);

// Update task & Delete task
router
  .route('/:id')
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;