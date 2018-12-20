var db = require('../db/dbconfig');
var order = {};


order.create = function (req, res, next) {
 

    var quentity = parseInt(req.body.quentity) || 0 ; 
    console.log(quentity) 
    console.log(req.body.price) 
    console.log(parseInt(req.body.quentity) * parseInt(req.body.price)) 
    var total = parseInt(req.body.quentity) * parseInt(req.body.price)
    console.log(total)

    console.log("res locals xx" , "result")
    console.log(req.body);

    db.one('INSERT INTO orders(quantity,total, phone, flavour_id) VALUES ($1,$2,$3,$4) RETURNING id;',
          [  quentity , total, req.body.phone || '000000000' , req.body.flavour_id || 1])
      .then(function (result) {
        console.log("res locals" , result)
        res.locals.orderId = result.id;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }
  order.find = function (req, res, next){
    console.log("\nedit order  orderfind" )
      db.one('SELECT * from orders WHERE id=$1;', [req.params.id])
      .then(function(result){
        console.log("edit order" , result )
          res.locals.order = result;
          next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  order.delete = function(req, res, next){
    db.none('DELETE FROM orders WHERE id=$1;', [req.params.id])
      .then(function(){
        console.log("successful delete");
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

order.update = function(req,res, next){

  console.log("req.body" , req.body);
console.log("res.locals.flavour " , res.locals.flavourPrice )
  var total = parseInt(req.body.quentity) * res.locals.flavourPrice 


  db.one('UPDATE orders SET quantity=$1, total=$2, phone=$3, flavour_id=$4 WHERE id=$5 RETURNING id;',
  [req.body.quentity, total, req.body.phone, parseInt(req.body.flavour_id), req.params.id])
 .then(function (result) {
 res.locals.orderId = result.id;
 next();
 })
 .catch(function(error){
  console.log(error);
  next();
})
}
  


order.findPrice =  function (req, res, next){
  console.log("\nedit order price xxxx" )
    db.one('SELECT * from flavour WHERE id=$1;', [req.body.flavour_id])
    .then(function(result){
      console.log("edit order" , result )
        res.locals.flavourPrice = result.price;
        next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}


module.exports = order;