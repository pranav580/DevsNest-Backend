const User = require('../models/user');
const bcrypt = require('bcrypt');
/**
 * Check if email already exists
 * password hash
 * Email LowerCase 
 * Save
 */
const saltRounds = 10;
const register =async (req, res)=>{
    const { email, password }= req.body;
    try {
        const alreadyExist = await User.findOne({where: {email}})
        if (alreadyExist) {
            res.status(401).send("Email already exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({ email: email.tolowerCase(), password: hash })
        const saveUser = await newUser.save();
        res.status(201).send(saveUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Somthing Went Wrong");
    }
}

module.exports = register;