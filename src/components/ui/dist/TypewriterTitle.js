"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var typewriter_effect_1 = require("typewriter-effect");
var TypewriterTitle = function (props) {
    return (react_1["default"].createElement(typewriter_effect_1["default"], { options: {
            loop: true
        }, onInit: function (typewriter) {
            typewriter
                .typeString("Supercharged Productivity.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("AI-Powered Insights.")
                .start();
        } }));
};
exports["default"] = TypewriterTitle;
