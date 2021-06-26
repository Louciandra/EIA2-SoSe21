"use strict";
var l11_2;
(function (l11_2) {
    l11_2.canvas = document.querySelector("canvas");
    l11_2.context = l11_2.canvas.getContext("2d");
    l11_2.wiesenStart = l11_2.canvas.height / 2;
    let sky = new l11_2.Sky("lightblue");
    let mountains = new l11_2.Mountain(0, l11_2.wiesenStart, 5, "lightgrey");
    let grass = new l11_2.Grass(l11_2.canvas.width, l11_2.canvas.height / 2, l11_2.wiesenStart, "darkgreen");
    l11_2.meadow = new l11_2.Meadow(50, l11_2.wiesenStart);
    let forest = new l11_2.Forest(3);
    l11_2.hive = new l11_2.Hive([forest.treeArray[0].position[0] - forest.treeArray[0].dimensions[0], forest.treeArray[0].position[1] - forest.treeArray[0].dimensions[1]]);
    let moveArray = [];
    for (let i = 0; i < 3; i++) {
        let cl = new l11_2.Cloud();
        moveArray.push(cl);
    }
    for (let i = 0; i < 100; i++) {
        let be = new l11_2.Bee();
        moveArray.push(be);
    }
    setInterval(updateIMG, 1);
    function updateIMG() {
        sky.draw();
        mountains.draw();
        grass.draw();
        l11_2.meadow.draw();
        forest.draw();
        l11_2.hive.draw();
        for (let obj of moveArray) {
            obj.move();
        }
        drawHiveNektar();
    }
    function drawHiveNektar() {
        let txt = "Nektar: " + l11_2.hive.nektar;
        l11_2.context.font = "100px Comic Sans MS";
        let gradient = l11_2.context.createLinearGradient(0, 100, l11_2.context.measureText(txt).width, 100);
        gradient.addColorStop(0, "rgb(255, 0, 0)");
        gradient.addColorStop(0.20202020202020202, "rgb(249, 255, 0)");
        gradient.addColorStop(0.3686868686868687, "rgb(0, 255, 2)");
        gradient.addColorStop(0.5303030303030303, "rgb(0, 245, 255)");
        gradient.addColorStop(0.6717171717171717, "rgb(0, 13, 255)");
        gradient.addColorStop(0.8383838383838383, "rgb(251, 0, 255)");
        gradient.addColorStop(1, "rgb(255, 0, 0)");
        l11_2.context.fillStyle = gradient;
        l11_2.context.fillText(txt, 0, 100);
    }
    l11_2.canvas.addEventListener("click", addNewBee);
    function addNewBee(_event) {
        let rect = l11_2.canvas.getBoundingClientRect();
        var x = _event.clientX - rect.left;
        var y = _event.clientY - rect.top;
        let pos = [x * 2.25, y * 2];
        let biene = new l11_2.Bee();
        biene.position = pos;
        moveArray.push(biene);
    }
})(l11_2 || (l11_2 = {}));
//# sourceMappingURL=script.js.map