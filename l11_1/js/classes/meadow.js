"use strict";
var l11_1;
(function (l11_1) {
    class Meadow {
        constructor(_meadowSize, _max) {
            this.flowerArray = [];
            for (let i = 0; i < _meadowSize; i++) {
                let petalCnt = Math.ceil(Math.random() * 3) + 4;
                let maxsize = l11_1.canvas.width / 18;
                let size = Math.ceil(Math.random() * maxsize) + maxsize / 5;
                let posX = Math.random() * (l11_1.canvas.width - size) + size;
                let h = Math.floor(Math.random() * l11_1.canvas.height / 8) + size;
                let posY = Math.random() * (l11_1.canvas.height - (size + h + _max)) + size + h + _max;
                let flower = new l11_1.Flower(petalCnt, [posX, posY], size, h, h / 20);
                this.flowerArray.push(flower);
            }
        }
        draw() {
            for (let flower of this.flowerArray) {
                flower.draw();
            }
        }
    }
    l11_1.Meadow = Meadow;
})(l11_1 || (l11_1 = {}));
//# sourceMappingURL=meadow.js.map