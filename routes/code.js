const express=require('express');
const router =express.Router();

const userController=require('../controllers/my_code');

router.get('/code',userController.code);
module.exports=router;