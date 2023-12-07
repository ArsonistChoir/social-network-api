const { users } = require('../utils/data');

const getUsers = (req, res) => {
  res.json(users);
};

const getSingleUser = (req, res) => {
  const userId = req.params.userId;
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
};

const createUser = (req, res) => {
  const { username, email } = req.body;
  const newUser = { id: Date.now().toString(), username, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedUser = req.body;

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    return res.json(users[userIndex]);
  }

  res.status(404).json({ message: 'User not found' });
};

const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    return res.json(deletedUser);
  }

  res.status(404).json({ message: 'User not found' });
};

const addFriend = (req, res) => {
  const userId = req.params.userId;
  const friendId = req.params.friendId;
  res.json({ message: 'Friend added successfully' });
};

const removeFriend = (req, res) => {
  const userId = req.params.userId;
  const friendId = req.params.friendId;
  res.json({ message: 'Friend removed successfully' });
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
};