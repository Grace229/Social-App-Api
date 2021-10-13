const express = require('express')

const router = express.Router();
const registerUser = require('../../controllers/auth/register')
const loginUser = require('../../controllers/auth/login')


router.post('/register', registerUser)
router.post('/login', loginUser)

router.post('/login', (req, res) => {
})
module.exports = router;