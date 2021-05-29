"use strict";
var l09_2;
(function (l09_2) {
    l09_2.canvas = document.querySelector("canvas");
    l09_2.context = l09_2.canvas.getContext("2d");
    let wiesenStart = l09_2.canvas.height / 2;
    let sky = new l09_2.Sky("lightblue");
    let mountains = new l09_2.Mountain(0, wiesenStart, 5, "lightgrey");
    let grass = new l09_2.Grass(l09_2.canvas.width, l09_2.canvas.height / 2, wiesenStart, "darkgreen");
    let meadow = new l09_2.Meadow(50, wiesenStart);
    let tropo = new l09_2.Troposphere(3, wiesenStart / 2, [l09_2.canvas.width / 8, l09_2.canvas.height / 12]);
    let forest = new l09_2.Forest(3);
    let beeHive = new l09_2.Hive(20);
    setInterval(updateIMG, 16);
    function updateIMG() {
        sky.draw();
        mountains.draw();
        grass.draw();
        meadow.draw();
        tropo.update();
        beeHive.update();
        forest.draw();
    }
})(l09_2 || (l09_2 = {}));
//# sourceMappingURL=script.js.map