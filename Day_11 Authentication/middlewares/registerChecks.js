const { emailValidation, passwordValidation } = require('../utils/validate')
/**
 * Email Validation - string
 * Password Validation
 * Password == Confirm
 */


const registerInitialCheck = (req, res, next) =>{
    const {email, password, confirmPassword } = req.body;
    if(typeof email === 'string' && typeof password ==='string' && typeof confirmPassword === 'string' &&
        email.length > 0 &&
        password.length > 8 &&
        confirmPassword === password &&
        emailValidation(email) &&
        passwordValidation(password)
    ){
        next();
    }else{
        res.status(401).send(console.log("initial Checks Fail"));
    }
};
module.exports = registerInitialCheck;