const express = require('express');
const { route } = require('../../app');
const transactionController=require('./transaction.controller');
const router=express.Router();

router.get('/',transactionController.find);

router.post('/',transactionController.save)

module.exports=router;
