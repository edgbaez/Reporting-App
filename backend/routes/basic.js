const express = require('express');

module.exports = function(app, db) {
var dataList = require('../controllers/dataController');

app.route('/create')
    .post(dataList.create);

app.route('/readAll')
    .get(dataList.list_all);

app.route('/read')
    .post(dataList.read);

app.route('/update')
    .put(dataList.update);

app.route('/delete')
    .delete(dataList.delete);
}
