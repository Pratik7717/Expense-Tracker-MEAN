const mongoose = require('mongoose');

const transactionSchema=new mongoose.Schema({
  type:{type:String,require:[true,'type is required']},
  text:{type:String,require:[true,'text is required']},
  amount:{type:Number,require:[true,'amount is required']}
});

module.exports=mongoose.model('transactionModel',transactionSchema);
