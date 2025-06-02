const User = require('../models/User');

exports.trackActivity = async (req, res) => {
  const { userId, workoutType, duration } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.activities.push({ workoutType, duration });
  await user.save();
  res.json({ message: 'Activity tracked successfully' });
};

exports.getProgress = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json(user.activities);
};
