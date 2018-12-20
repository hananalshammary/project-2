var express = require('express');
var router = express.Router();



var yogurt = require('../models/yogurt');
var order = require('../models/order');

router.get('/', renderIndex);

router.post('/', order.create, redirectShow);
router.get('/:id',order.find, rendershowOrder);
router.get('/:id/edit', order.find ,renderEdit);


// router.get('/:id', order.find, yogurt.findByOrder, renderShow);
router.delete('/:id', order.delete, redirectShow2);
router.put('/:id', order.findPrice,  order.update , redirectShow3);

function renderIndex(req, res){
  var mustacheVariables = { 
    orders: res.locals.orders
  }
  res.render('./orders/index', mustacheVariables);
}


function rendershowOrder(req, res){
  var mustacheVariables ={
   order: res.locals.order
  }
  res.render('./orders/show', mustacheVariables);
  
}

function redirectShow(req, res) {
  // res.redirect(`/orders/${res.locals.yogurtId}`);
  res.redirect(`/orders/${ res.locals.orderId}`);
  
}

function redirectShow3(req, res) {
  // res.redirect(`/orders/${res.locals.yogurtId}`);
  res.redirect(`/orders/${req.params.id}`);
  
}

function redirectShow2(req, res){
  console.log("delete")
  res.redirect('/yogurts');
}
function renderEdit(req,res){

  console.log("result \n\n\n\n\n" , res.locals.order)
  var mustacheVariables = {
    order: res.locals.order
  }
  res.render('./orders/edit', mustacheVariables);
}

module.exports = router;