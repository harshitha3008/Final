const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Route to get user profile by username
router.get('/profile/:username', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });

module.exports = router;