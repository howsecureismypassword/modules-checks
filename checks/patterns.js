"use strict";

var L = require("hsimp-library");
var check = require("../check");

module.exports = check(function (patterns) {
    return L.map(function (message, pattern) {
        var regex = new RegExp(pattern);

        return function (password) {
            return regex.test(password) ? message : false;
        };
    }, patterns);
});
