/**
 * \file PoundSS.js
 */
(function (window) {
    "use strict";
    //set local paths to external files
    var camelot     = window.com.camelot,
        iwg         = camelot.iwg,
        images      = window.com.camelot.core.iwgLoadQ.images,
        PoundSS    = function () {
            //singletonCache
            if (typeof PoundSS.instance !== "object") PoundSS.instance = this;
            return PoundSS.instance;
        },
        //make an instance if needed
        _PoundSS = new PoundSS();
    //add and set "next":false to stop on last frame
    //Static
    PoundSS.VERSION = '0.0.1';
    PoundSS.spriteSheet = {
        "images": [images.poundSS],
        "frames": [
            [1463, 161, 129, 137, 0, 63, 65],
            [663, 161, 132, 141, 0, 64, 67],
            [260, 161, 135, 144, 0, 66, 69],
            [1774, 2, 138, 147, 0, 67, 70],
            [1488, 2, 140, 149, 0, 68, 71],
            [1342, 2, 142, 151, 0, 69, 72],
            [1048, 2, 143, 152, 0, 70, 73],
            [899, 2, 145, 153, 0, 71, 73],
            [452, 2, 145, 154, 0, 71, 74],
            [152, 2, 146, 155, 0, 71, 74],
            [2, 2, 146, 155, 0, 71, 74],
            [302, 2, 146, 155, 0, 71, 74],
            [601, 2, 145, 154, 0, 71, 74],
            [750, 2, 145, 153, 0, 71, 73],
            [1195, 2, 143, 152, 0, 70, 73],
            [1632, 2, 138, 147, 0, 67, 70],
            [1596, 161, 129, 137, 0, 63, 67],
            [799, 161, 129, 138, 0, 63, 70],
            [1330, 161, 129, 138, 0, 63, 72],
            [1064, 161, 129, 138, 0, 63, 57],
            [1197, 161, 129, 138, 0, 63, 40],
            [932, 161, 128, 138, 0, 63, 53],
            [531, 161, 128, 141, 0, 63, 67],
            [399, 161, 128, 144, 0, 63, 81],
            [129, 161, 127, 146, 0, 63, 95],
            [2, 161, 123, 147, 0, 61, 108],
            [1916, 2, 116, 147, 0, 59, 122]
        ],
        "animations": {
            "animate": {
                "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 5, 4, 15, 2, 1, 0, 0, 16, 17, 18, 17, 16, 0, 0, 19, 16, 20, 21, 22, 23, 24, 25, 26]
            },
            "all": {
                "frames": [26]
            }
        }
    };
    PoundSS.ss = new createjs.SpriteSheet(PoundSS.spriteSheet);

    //private method
    iwg._class("iwg.lib.flassets.PoundSS", PoundSS);

}(window));
