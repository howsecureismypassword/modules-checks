"use strict";

var L = require("hsimp-library");
var check = require("../check");

module.exports = check(function (passwords) {
    return [function (password) {
        var rank;

        password = password.toLowerCase();

        L.forEach(function (checking, index) {
            if (checking === password) {
                rank = Math.ceil((index + 1) / 5) * 5;
                return false;
            }
        }, passwords);

        if (rank) {
            return {
                level: "insecure",
                id: "common",
                value: rank
            };
        } else {
            return false;
        }
    }];
});
