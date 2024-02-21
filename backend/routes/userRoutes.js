const express = require('express');
const { register } = require('../controllers/userAuthContollers/register');
const { login } = require('../controllers/userAuthContollers/login');
const { logout } = require('../controllers/userAuthContollers/logout');
const { refresh } = require('../controllers/userAuthContollers/refresh');
const createSellController = require('../controllers/userSellControllers/createSell');
const authMiddleware = require('../middlewares/authMiddleware');
const singleUpload = require('../middlewares/multerMiddleware');
const router = express.Router();

// [+] Auth routes
router.post("/signup", register);
router.post("/signin", login);
router.post("/signout", logout);
router.post("/refresh", refresh);
// [+] sell routes
router.post("/create-sell", authMiddleware , singleUpload, createSellController.create);

module.exports = router;