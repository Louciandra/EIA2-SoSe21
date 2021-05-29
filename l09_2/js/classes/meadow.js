"use strict";
var l09_2;
(function (l09_2) {
    class Meadow {
        constructor(_meadowSize, _max) {
            this.flowerArray = [];
            for (let i = 0; i < _meadowSize; i++) {
                let petalCnt = Math.ceil(Math.random() * 3) + 4;
                let maxsize = l09_2.canvas.width / 18;
                let size = Math.ceil(Math.random() * maxsize) + maxsize / 5;
                let posX = Math.random() * (l09_2.canvas.width - size) + size;
                let h = Math.floor(Math.random() * l09_2.canvas.height / 8) + size;
                let posY = Math.random() * (l09_2.canvas.height - (size + h + _max)) + size + h + _max;
                let flower = new l09_2.Flower(petalCnt, [posX, posY], size, h, h / 20);
                this.flowerArray.push(flower);
            }
        }
        draw() {
            for (let flower of this.flowerArray) {
                flower.draw();
            }
        }
    }
    l09_2.Meadow = Meadow;
})(l09_2 || (l09_2 = {}));
//# sourceMappingURL=meadow.js.map