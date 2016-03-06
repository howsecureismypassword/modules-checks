"use strict";

/**
 * Testing Libraries
 */
var buster = require("buster");
var assert = buster.referee.assert;

/**
 * Setup
 */

/**
 * Tests
 */
buster.testCase("checker", {
    "Top 10,000": function () {
        var top10k = require("./checks/top10k");
        top10k.setDictionary(require("./dictionaries/top10k")[0].split(","));

        var check = top10k.get()[0];
        var result = check("password");

        assert.same(result.id, "top10k");
        assert.same(result.level, "insecure");
        assert.same(result.value, 5);
    },

    "Patterns": function () {
        var patterns = require("./checks/patterns");
        patterns.setDictionary(require("./dictionaries/patterns"));

        var check = patterns.get()[0];
        var result = check("correcthorsebatterystaple");

        assert.same(result.id, "xkcd");
        assert.same(result.level, "insecure");
        assert.same(result.value, undefined);
    },
});
