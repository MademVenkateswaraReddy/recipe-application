const express = require('express');
const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const saltRounds = 10;
    const hashpassword = await bcrypt.hash(password, saltRounds);
    const newUser = new UserModel({ username, password: hashpassword });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'defaultSecret');
    res.cookie('token', token);
    return res.status(200).json({ message: 'Login successful', id: user._id });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/', (req, res)=>{
  res.clearCookie('token')
  res.json({message: 'success'})
})

module.exports = router;
