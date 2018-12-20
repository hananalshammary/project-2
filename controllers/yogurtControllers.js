var express = require('express');
var router = express.Router();

var yogurt = require('../models/yogurt');
var order  = require('../models/order');

router.get('/', yogurt.getAll, renderIndex);

router.get('/:id', yogurt.find, renderShow);


function renderIndex(req, res){
  var mustacheVariables = {
    yogurts: res.locals.yogurts
  }
  res.render('./yogurts/index', mustacheVariables);
}


function renderShow(req, res) {
  
  console.log( res.locals); 
  var mustacheVariables = {
    yogurts: res.locals.yogurts
  }
  res.render('./yogurts/show', mustacheVariables);
}

//why house
function renderNew(req, res) {
  var mustacheVariables = {
    orders: res.locals.orders
  }
  res.render('./yogurts/new', mustacheVariables);
}


function redirectShow(req, res) {
  res.redirect(`/yogurts/${res.locals.yogurtId}`);
}

module.exports = router;
