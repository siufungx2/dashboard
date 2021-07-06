const Joi = require('@hapi/joi');

// Register validation
const registerValidation = (data)=>{
    const schema = Joi.object({
        name:Joi.string().min(3).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });

    return schema.validate(data);
};

// Login validation
const loginValidation = (data)=>{
    const schema = Joi.object({
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });

    return schema.validate(data);
};

// Users listing API variable validation
const userListValidation = (data)=>{
    const schema = Joi.object({
        page:Joi.number().min(1),
        limit:Joi.number().min(1),
        search:Joi.string()
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.userListValidation = userListValidation;