var ObjectID = require('mongodb').ObjectID;

//Lista Jornal
exports.listar = function(req, res){
  // console.log(req.params);
  req.db.collection('jornal').findOne({nome: req.params.nome},function(err, jornal){
    if(err){
      return res.sendStatus(503)//ERROR 503: service unavailable
    }
    res.send(jornal);
  });
};
