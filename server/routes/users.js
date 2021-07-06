const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');
const { userListValidation } = require('../validation');

router.get('/', verify, async (req, res) => {
    const page = (req.query.page) ? parseInt(req.query.page) : 1;
    const limit = (req.query.limit) ? parseInt(req.query.limit) : 10;
    const searchKeyword = (req.query.search) ? req.query.search: '';
    const { error } = userListValidation(req.query);

    if(error) return res.status(400).send(error.details[0].message);
    try {
        const dataList = await User.find({'name': new RegExp(searchKeyword)}).limit(limit).skip((page - 1) * limit).exec();
        const totalPage = await User.count({'name': new RegExp(searchKeyword)});
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

module.exports = router;
