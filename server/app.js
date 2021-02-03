const express = require('express');
const mongoose = require('mongoose');
const routes=require('./apis/transactions/transaction.routes');
const app=express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
      return res.status(200).json({});
  }
  next();
});
app.use(express.json());

mongoose.connect('mongodb+srv://root-pratik:Pratik@767@cluster0.ien6p.mongodb.net/expense-tracker?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology:true }
);


app.get('/',routes);

app.post('/',routes);

module.exports=app;
