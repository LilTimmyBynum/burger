// burger.js

var theOrm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        var orderBy = " ORDER BY date ASC";
        theOrm.all("burgers", orderBy, function(res) {
            cb(res);
        });
    },

    create: function(myCols, myVals, cb) {
        theOrm.create("burgers", myCols, myVals, function(res) {
            cb(res);
        });
    },

    update: function(myCols, myCondition, cb) {
        theOrm.update("burgers", myCols, myCondition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;