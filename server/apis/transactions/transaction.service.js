const { text } = require('express');
const transactionModel = require('../models/transaction.model');


exports.save= async (transaction)=>{
  const saved= await transactionModel.create(transaction);
  return saved;
}

exports.find=async ()=>{
  const data=await transactionModel.find();
  // console.log('req reached to database service')
  return data;

}

exports.delete = async (id) => {
  return await transactionModel.findByIdAndRemove(id);
}

