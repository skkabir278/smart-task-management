const Task = require('../../models/task.model');

exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.user._id
  });

  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const { status, search } = req.query;

  let query = { user: req.user._id };

  if (status) query.status = status;

  if (search) {
    query.title = { $regex: search, $options: 'i' };
  }

  const tasks = await Task.find(query).sort({ createdAt: -1 });

  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );

  if (!task) return res.status(404).json({ message: 'Task not found' });

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id
  });

  if (!task) return res.status(404).json({ message: 'Task not found' });

  res.json({ message: 'Task removed' });
};