const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');
const { userListValidation } = require('../validation');

router.get('/', verify, async (req, res) => {
    const { page = 1, limit = 10 } = parseInt(req.query);
    const { error } = userListValidation(req.query);
    if(error) return res.status(400).send(error.details[0].message);
    try {
        const dataList = await User.find().limit(limit).skip((page - 1) * limit).exec();
        const totalPage = await User.countDocuments();
        return res.json(
            {
                totalPage: Math.ceil(totalPage / limit),
                currentPage: page,
                itemPerPage: limit,
                dataList: dataList
            }
        );
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
