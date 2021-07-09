const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
    // Vaildate
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Check if user exist in DB
    const user = await User.findOne({ email: req.body.email});
    if(!user) return res.status(400).send('Email or password is wrong');
    // Password check
    const valiPassword = await bcrypt.compare(req.body.password, user.password);
    if(!valiPassword) return res.status(400).send('Email or password is wrong')

    // Create token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;