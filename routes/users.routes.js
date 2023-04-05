var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.controller');

router.get('/', async function(req, res, next) {
  await userController.getAllUsers(req.body,res);
  res.send()
});

router.post('/', async function(req, res, next) {
  await userController.createUser(req.body,res);
  res.send()
});

module.exports = router;
