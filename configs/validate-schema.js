const Joi = require('joi')

// https://joi.dev/api/?v=17.4.0#general-usage
const pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"

const userValidate= Joi.object({
    username: Joi.string().alphanum().min(3).message("Username must be greater than 3 characters").max(30).required().label('Username'),
    password: Joi.string().pattern(new RegExp(pattern)).required().label('Password'),
    name: Joi.string().required().label("Name"),
    handle: Joi.string().required().label("Unique Handle")
})

module.exports = userValidate