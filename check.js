"use strict";

var L = require("hsimp-library");

var check = function (fn) {
    if (!L.isFunction(fn)) {
        throw new Error("Check is not a function");
    }

    var self = {},
        dictionary = [];

    self.setDictionary = function (dic) {
        dictionary = dic;
    }

    self.get = function () {
        return fn(dictionary);
    };

    return self;
};

module.exports = check;
