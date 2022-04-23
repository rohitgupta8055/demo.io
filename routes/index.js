const express=require('express');
const router =express.Router();

const homeController=require('../controllers/home_controller');

console.log('routes loaded');

router.get('/',homeController.home);
router.use('/users',require('./user'));
router.use('/my',require('./code'));

module.exports=router;
