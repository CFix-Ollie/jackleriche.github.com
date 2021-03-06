/**
 * Prizes Sprite-sheet for end game
 */
(function (window) {
    "use strict";
    //set local paths to external files
    var camelot = window.com.camelot,
        iwg = camelot.iwg,
        images = window.com.camelot.core.iwgLoadQ.images,
        PrizeSS = function () {
            //singletonCache
            if (typeof PrizeSS.instance !== "object") PrizeSS.instance = this;
            return PrizeSS.instance;
        },
        //make an instance if needed
        _PrizeSS = new PrizeSS();
    //add and set "next":false to stop on last frame
    //Static
    PrizeSS.VERSION = '0.0.1';
    PrizeSS.spriteSheet = {
        "images": [images.prizeSS],
        "frames": [
            [1479, 104, 100, 125], 
                [1342, 104, 135, 123], 
                [1170, 85, 170, 118], 
                [713, 98, 199, 109], 
                [1401, 2, 218, 100], 
                [941, 2, 227, 89], 
                [1170, 2, 229, 81], 
                [713, 2, 226, 94], 
                [485, 2, 226, 103], 
                [2, 348, 228, 110], 
                [2, 232, 232, 114], 
                [2, 116, 235, 114], 
                [2, 2, 239, 112], 
                [243, 2, 240, 109], 
                [490, 400, 57, 72], 
                [843, 209, 70, 69], 
                [549, 400, 86, 66], 
                [1590, 252, 101, 62], 
                [368, 113, 113, 56], 
                [236, 298, 120, 50], 
                [232, 350, 122, 48], 
                [914, 150, 121, 55], 
                [239, 177, 121, 60], 
                [1467, 231, 121, 64], 
                [1043, 204, 122, 64], 
                [1043, 270, 122, 64], 
                [1342, 229, 123, 63], 
                [243, 113, 123, 62], 
                [1296, 205, 44, 57], 
                [562, 173, 51, 57], 
                [999, 337, 63, 56], 
                [635, 343, 74, 54], 
                [995, 395, 82, 51], 
                [356, 350, 86, 48], 
                [1161, 388, 89, 47], 
                [817, 396, 88, 52], 
                [546, 343, 87, 55], 
                [637, 399, 87, 57], 
                [726, 382, 88, 57], 
                [727, 441, 88, 57], 
                [816, 338, 89, 56], 
                [907, 337, 90, 54], 
                [1584, 464, 30, 45], 
                [1643, 368, 32, 47], 
                [1639, 417, 36, 47], 
                [442, 460, 45, 47], 
                [1587, 416, 50, 46], 
                [1529, 448, 53, 45], 
                [1588, 368, 53, 46], 
                [307, 460, 51, 49], 
                [1252, 388, 52, 51], 
                [1296, 441, 52, 52], 
                [1533, 345, 53, 52], 
                [1642, 136, 54, 50], 
                [193, 460, 55, 49], 
                [250, 460, 55, 49], 
                [817, 450, 45, 59], 
                [1642, 75, 54, 59], 
                [546, 284, 65, 57], 
                [864, 450, 78, 54], 
                [907, 393, 86, 51], 
                [1158, 338, 91, 48], 
                [711, 274, 92, 47], 
                [1064, 336, 92, 52], 
                [805, 280, 92, 56], 
                [232, 400, 92, 58], 
                [326, 400, 92, 58], 
                [711, 323, 92, 57], 
                [613, 285, 93, 56], 
                [362, 220, 94, 56], 
                [1295, 272, 31, 47], 
                [1303, 321, 35, 47], 
                [1651, 316, 41, 48], 
                [1413, 294, 50, 47], 
                [1470, 446, 57, 46], 
                [1465, 297, 60, 46], 
                [1527, 297, 60, 46], 
                [1350, 451, 58, 50], 
                [1350, 397, 58, 52], 
                [1111, 448, 58, 53], 
                [1049, 448, 60, 53], 
                [1171, 437, 60, 52], 
                [1589, 316, 60, 50], 
                [1233, 441, 61, 50], 
                [944, 448, 46, 61], 
                [992, 448, 55, 60], 
                [420, 400, 68, 58], 
                [1079, 390, 80, 56], 
                [637, 458, 88, 51], 
                [458, 228, 94, 48], 
                [368, 171, 95, 47], 
                [465, 173, 95, 53], 
                [615, 226, 94, 57], 
                [450, 278, 94, 59], 
                [450, 339, 94, 59], 
                [615, 107, 96, 59], 
                [1070, 93, 97, 57], 
                [615, 168, 96, 56], 
                [1581, 104, 59, 73], 
                [1621, 2, 74, 71], 
                [358, 280, 90, 68], 
                [1590, 188, 106, 62], 
                [236, 239, 117, 57], 
                [1043, 152, 125, 50], 
                [2, 460, 126, 48], 
                [941, 93, 127, 55], 
                [915, 275, 126, 60], 
                [1167, 272, 126, 64], 
                [915, 207, 126, 66], 
                [1167, 205, 127, 65], 
                [485, 107, 128, 64], 
                [713, 209, 128, 63], 
                [1306, 370, 32, 47], 
                [404, 460, 36, 49], 
                [360, 460, 42, 49], 
                [1251, 338, 50, 48], 
                [1530, 399, 55, 47], 
                [1470, 398, 58, 46], 
                [1410, 451, 58, 47], 
                [554, 232, 59, 50], 
                [1474, 345, 57, 51], 
                [1410, 397, 58, 52], 
                [1350, 344, 60, 51], 
                [1412, 345, 60, 50], 
                [130, 460, 61, 49], 
                [1350, 294, 61, 48]
            ],
            "animations": {   

                    "win_1000": {
                        frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
                        next: false, 
                        speed: 1
                    },
                    "win_500": {
                        frames: [98,99,100,101,102,103,104,105,106,107,108,109,110,111],
                        next: false, 
                        speed: 1
                    },
                    "win_100": {
                        frames: [14,15,16,17,18,19,20,21,22,23,24,25,26,27],
                        next: false, 
                        speed: 1
                    },
                    "win_40": {
                        frames: [84,85,86,87,88,89,90,91,92,93,94,95,96,97],
                        next: false, 
                        speed: 1
                    },
                    "win_20": {
                        frames: [56,57,58,59,60,61,62,63,64,65,66,67,68,69],
                        next: false, 
                        speed: 1
                    },
                    "win_10": {
                        frames: [28,29,30,31,32,33,34,35,36,37,38,39,40,41],
                        next: false, 
                        speed: 1
                    },
                    "win_5": {
                        frames: [112,113,114,115,116,117,118,119,120,121,122,123,124,125],
                        next: false, 
                        speed: 1
                    },
                    "win_2": {
                        frames: [70,71,72,73,74,75,76,77,78,79,80,81,82,83],
                        next: false, 
                        speed: 1
                    },
                    "win_1": {
                        frames: [42,43,44,45,46,47,48,49,50,51,52,53,54,55],
                        next: false, 
                        speed: 1
                    }
         
        }
    };
    PrizeSS.ss = new createjs.SpriteSheet(PrizeSS.spriteSheet);
    
    //private method
    iwg._class("iwg.lib.SS.PrizeSS", PrizeSS);

}(window));
