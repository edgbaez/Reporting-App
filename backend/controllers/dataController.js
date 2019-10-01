const dataSorting = require("data-sorting");
const Data = require("../models/reportsModel")
exports.list_all = function(req, res) {
  Data.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.create = function(req, res) {
  var new_Data = new Data(req.body);
  console.log("HIT")
  new_Data.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.predict = function(req, res) {
  dataSorting(db,db-config);
};

exports.read = function(req, res) {
    Data.findById(req.params.Id, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update = function(req, res) {
    Data.findOneAndUpdate({_id: req.params.Id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete = function(req, res) {
    Data.remove({
    _id: req.params.Id
  }, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Successfully deleted' });
  });
};
