// orm.js

var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

var myOrm = {
    all: function(tableInput, orderBy, cb) {
        var query = "SELECT * FROM " + tableInput + orderBy + ";";
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(myTable, myCols, myVals, cb) {
        var query = "INSERT INTO " + myTable;
        query += " (";
        query += myCols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(myVals.length);
        query += ") ";
        connection.query(query, myVals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function(myTable, myCols, myCondition, cb) {
        var query = "UPDATE " + myTable;
        query += " SET ";
        query += myCols + " = true";
        query += " WHERE ";
        query += myCondition;
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    }
};

module.exports = myOrm;