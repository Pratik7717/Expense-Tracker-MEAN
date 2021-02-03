const transactionModel = require('../models/transaction.model');
const transactionService=require('./transaction.service');


exports.save= async (req,res,next)=>{
  try {
    const saved=await transactionService.save(req.body);
    res.status(201).json({
      success: true,
      data: saved
    });
  } catch (err) {
    console.log('err',err);
  }

}

exports.find= async (req,res,next)=>{
  try {
    const data=await transactionService.find();
    // const data=await transactionModel.find();
    res.status(200).json({
      data: data
    });
    console.log('Get req received');

  } catch (err) {
    console.log('err in find controller method get rq: ',err);
  }
}
