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

exports.delete=async (req,res,next)=>{
  try {
    // console.log(req.params.id);
    const transaction=await transactionService.delete(req.params.id);
    if(!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }

}
