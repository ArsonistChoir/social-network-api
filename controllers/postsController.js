const Thoughts = require('../models/Thoughts');

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thoughts.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSingleThought = async (req, res) => {
    const { thoughtId } = req.params; 
    try {
      const thought = await Thoughts.findById(thoughtId); 
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const createThought = async (req, res) => {
    const { username, thoughtText } = req.body;
    try {
      const newThought = await Thoughts.create({ username, thoughtText });
      res.status(201).json(newThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const updateThought = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const updatedThought = await Thoughts.findByIdAndUpdate(id, { text }, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteThought = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedThought = await Thoughts.findByIdAndDelete(id);
    if (!deletedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json(deletedThought);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createReaction = async (req, res) => {
  const { id } = req.params;
  const { reactionText } = req.body;
  try {
    const thought = await Thoughts.findById(id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    thought.reactions.push({ text: reactionText });
    await thought.save();
    res.status(201).json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteReaction = async (req, res) => {
  const { id, reactionId } = req.params;
  try {
    const thought = await Thoughts.findById(id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    thought.reactions.id(reactionId).remove();
    await thought.save();
    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
};