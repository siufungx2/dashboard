const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const { userListValidation, registerValidation, updateValidation } = require('../validation');
const { updateOne } = require('../models/User');

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

router.get('/:id', verify, async (req, res) => {
    await User.findOne( {'_id': req.params.id}, {name:1, email:1, date:1}, (err, userDetail) => {
        if(err) throw err;
        if(userDetail){
            return res.send(userDetail);
        }else{
            res.status(400).send('Not found');
        }
    } );
});

// Registation
router.post('/', verify, async (req, res) => {
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

// Delete user
router.delete('/:id', verify,  async (req, res) => {
    const deleteUser = await User.deleteOne( {'_id': req.params.id}, (err, collection) => {
        if(err) throw err;
        if(collection.deletedCount < 1){
            return res.status(400).send(collection.deletedCount + " record(s) deleted");
        }else{
            res.send(collection.deletedCount + " record(s) deleted");
        }
    } );
  });

// Update user
router.put('/', verify, async (req, res) => {
    // Vaildate
    const { error } = updateValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    // Check if user exist in DB
    // const emailExist = await User.findOne({ email: req.body.email });
    const emailExist = await User.findOne({ email: req.body.email, _id: { $ne: req.body._id } });
    if(emailExist) return res.status(400).send('Email already exist');

    // Hash passowrd
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    // Update content
    const filter = { _id: req.body._id };
    const updateContent = {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    };
    const options = {
        upsert: false,
        rawResult: true,
        useFindAndModify: false
    }
    let updateData = await User.findOneAndUpdate(filter, updateContent, options, (err, doc) => {
        if(err) throw err;
        res.send(filter);
    });
    res.send(updateData);
})

module.exports = router;
