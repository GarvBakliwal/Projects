const e = require("express");
const userController = require("../controller/userController.js");
const router = e.Router();

router.post('/create',userController.create);
router.post('/login',userController.login);
router.get('/',userController.read);
router.get('/:id',userController.readOne);
router.patch('/update/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteUser);

module.exports = router;