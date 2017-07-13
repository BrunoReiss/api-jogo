var ObjectID = require('mongodb').ObjectID;

//Lista Soldado
exports.listar = function(req, res){
  // console.log(req.params);
  req.db.collection('soldado').findOne({nome: req.params.nome},function(err, soldado){
    if(err){
      return res.sendStatus(503)//ERROR 503: service unavailable
    }
    res.send(soldado);
  });
};
