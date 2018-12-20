var db = require('../db/dbconfig');
var yogurt = {};

yogurt.getAll = function(req, res, next){
  db.manyOrNone('SELECT * FROM flavour;')
    .then(function(result){
      res.locals.yogurts = result;
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

yogurt.getPrice = function(req, res , next){
  db.one('SELECT price from flavour WHERE id=$1;',[req.params.id])
    .then(function (result) {
      res.locals.price = result;
      next();
  })
  .catch(function (error) {
    console.log(error);
    next();
  })

}
yogurt.find = function (req, res, next) {
  db.one('SELECT * FROM flavour WHERE id = $1;', [req.params.id])
    .then(function (result) {
      res.locals.yogurts = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}


module.exports = yogurt;