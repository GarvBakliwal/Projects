const e = require("express");
const userController = require("../controller/userController.js");
const router = e.Router();

router.post('/create',userController.create);

module.exports = router;