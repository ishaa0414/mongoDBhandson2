const express=require("express");
const controller=require('../controller/employee');
const router=express.Router();

router.post('/addemployee')
router.post('/showemployee')
router.post('/highpaidemployee')
router.post('/experiencedemployee')
router.post('/graduatedafter2015')
router.put('/updatesalary')
router.delete('/deleteemployee')

module.exports=router;

