var ObjectID = require('mongodb').ObjectID;

//Lista Jornal
exports.listar = function(req, res){
  // console.log(req.params);
  req.db.collection('hacker').findOne({nome: req.params.nome},function(err, hacker){
    if(err){
      return res.sendStatus(503)//ERROR 503: service unavailable
    }
    res.send(hacker);
  });
};
