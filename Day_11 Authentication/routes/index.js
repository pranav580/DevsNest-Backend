var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks')
var register = require('../controllers/register')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requires {email, firstName, lastName, Password, confirmPassword } - req.body
 * @description
 * Security, Performance, and Edge cases
 * Level - 1
 * Email Validation - string
 * Password Validation
 * Password == Confirm
 * Level - 2
 * JS/SQL injection- THA
 * Level - 3
 * Check if email already exists
 * password hash
 * Email LowerCase 
 * Save
 */

router.post('/register' , registerInitialCheck, register)
module.exports = router;
