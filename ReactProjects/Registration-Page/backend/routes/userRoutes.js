import e from "express";
// import create from "../controller/userController.js"
import getUsers from "../controller/userController.js"
import { Router } from "express";

const router = Router();

// router.post('/create',create);
router.get('/get',getUsers);

export default router;