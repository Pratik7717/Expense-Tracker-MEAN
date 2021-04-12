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

mongoose.connection.on('connected',()=>{
  console.log('connected to database')
});

const path = require('path');

app.use(express.static('public'));
app.get('/transaction',routes);
app.post('/transaction',routes);
app.delete('/transaction/:id',routes);
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'));
})



module.exports=app;
