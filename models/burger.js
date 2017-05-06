var orm = require("../config/orm.js");


var burgers = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
//   // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne(cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne(objColVals, condition, function(res) {
      cb(res);
    });
  },

};

// Export the database functions for the controller (burgerssController.js).
module.exports = burgers;
