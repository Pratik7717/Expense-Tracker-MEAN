const express = require('express');
const { route } = require('../../app');
const transactionController=require('./transaction.controller');
const router=express.Router();

router.get('/transaction',transactionController.find);

router.post('/transaction',transactionController.save);

router.delete('/transaction/:id',transactionController.delete);

module.exports=router;
