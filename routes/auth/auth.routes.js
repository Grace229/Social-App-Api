const express = require('express')

const router = express.Router();
const registerUser = require('../../controllers/auth/register')

router.post('/register', registerUser)

router.post('/login', (req, res) => {
})
module.exports = router;