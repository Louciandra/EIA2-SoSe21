"use strict";
var l10_2;
(function (l10_2) {
    l10_2.canvas = document.querySelector("canvas");
    l10_2.context = l10_2.canvas.getContext("2d");
    l10_2.wiesenStart = l10_2.canvas.height / 2;
    let sky = new l10_2.Sky("lightblue");
    let mountains = new l10_2.Mountain(0, l10_2.wiesenStart, 5, "lightgrey");
    let grass = new l10_2.Grass(l10_2.canvas.width, l10_2.canvas.height / 2, l10_2.wiesenStart, "darkgreen");
    let meadow = new l10_2.Meadow(50, l10_2.wiesenStart);
    let forest = new l10_2.Forest(3);
    let moveArray = [];
    for (let i = 0; i < 3; i++) {
        let cl = new l10_2.Cloud();
        moveArray.push(cl);
    }
    for (let i = 0; i < 20; i++) {
        let be = new l10_2.Bee();
        moveArray.push(be);
    }
    setInterval(updateIMG, 16);
    function updateIMG() {
        sky.draw();
        mountains.draw();
        grass.draw();
        meadow.draw();
        for (let obj of moveArray) {
            obj.move();
        }
        forest.draw();
    }
})(l10_2 || (l10_2 = {}));
//# sourceMappingURL=script.js.map