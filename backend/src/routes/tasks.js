import express from 'express';
import Task from '../models/Task.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.use(auth);

router.get('/', async (req, res) => {
  const { status } = req.query;
  const query = { user: req.user.id };
  if (status === 'active') query.completed = false;
  if (status === 'completed') query.completed = true;
  const tasks = await Task.find(query).sort({ createdAt: -1 });
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const { title, description, dueDate } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const task = await Task.create({ user: req.user.id, title, description, dueDate });
  res.status(201).json(task);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, completed, dueDate } = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: id, user: req.user.id },
    { title, description, completed, dueDate },
    { new: true }
  );
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
});

router.patch('/:id/toggle', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id, user: req.user.id });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const del = await Task.findOneAndDelete({ _id: id, user: req.user.id });
  if (!del) return res.status(404).json({ message: 'Task not found' });
  res.json({ success: true });
});

export default router;
