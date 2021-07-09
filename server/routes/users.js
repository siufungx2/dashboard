const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const { userListValidation, registerValidation } = require('../validation');

router.get('/', verify, async (req, res) => {
    const page = (req.query.page) ? parseInt(req.query.page) : 1;
    const limit = (req.query.limit) ? parseInt(req.query.limit) : 10;
    const searchKeyword = (req.query.search) ? req.query.search: '';
    const { error } = userListValidation(req.query);

    if(error) return res.status(400).send(error.details[0].message);
    try {
        const dataList = await User.find({'name': new RegExp(searchKeyword)}).limit(limit).skip((page - 1) * limit).exec();
        const totalPage = await User.countDocuments({'name': new RegExp(searchKeyword)});
        return res.json(
            {
                totalPage: Math.ceil(totalPage / limit),
                currentPage: page,
                itemPerPage: limit,
                dataList: dataList,
                searchKeyword: searchKeyword
            }
        );
    } catch (err) {
        console.error(err.message);
    }
});

// Registation
router.post('/', async (req, res) => {
    // Vaildate
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Check if user exist in DB
    const emailExist = await User.findOne({ email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exist');

    // Hash passowrd
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });

    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;
