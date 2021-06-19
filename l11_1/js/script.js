"use strict";
var l11_1;
(function (l11_1) {
    l11_1.canvas = document.querySelector("canvas");
    l11_1.context = l11_1.canvas.getContext("2d");
    l11_1.wiesenStart = l11_1.canvas.height / 2;
    let sky = new l11_1.Sky("lightblue");
    let mountains = new l11_1.Mountain(0, l11_1.wiesenStart, 5, "lightgrey");
    let grass = new l11_1.Grass(l11_1.canvas.width, l11_1.canvas.height / 2, l11_1.wiesenStart, "darkgreen");
    let meadow = new l11_1.Meadow(50, l11_1.wiesenStart);
    let forest = new l11_1.Forest(3);
    let moveArray = [];
    for (let i = 0; i < 3; i++) {
        let cl = new l11_1.Cloud();
        moveArray.push(cl);
    }
    for (let i = 0; i < 20; i++) {
        let be = new l11_1.Bee();
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
})(l11_1 || (l11_1 = {}));
//# sourceMappingURL=script.js.map