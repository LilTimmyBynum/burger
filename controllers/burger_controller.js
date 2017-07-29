// burger_controller.js

var express = require("express");
var theBurger = require("../models/burger.js");

var myRouter = express.Router();

myRouter.get("/", function(req, res) {
    theBurger.all(function(info) {
        var burgerObject = {
            burgers: info
        };
        res.render("index", burgerObject);
    });
});

myRouter.post("/", function(req, res) {
    // validate user input before create
    if (req.body.yourBurger != "") {
        theBurger.create([
            "burger_name", "devoured"
        ], [
            req.body.yourBurger, false
        ], function() {
            res.redirect("/");
        });
    };
});

// changes the condition of devoured
myRouter.put("/:id", function(req, res) {
    var condition = "burger_name = \"" + req.params.id + "\"";

    theBurger.update([
        "devoured"
    ], [
        condition
    ], function() {
        res.redirect("/");
    });
});

module.exports = myRouter;