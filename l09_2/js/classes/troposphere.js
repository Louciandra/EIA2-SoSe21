"use strict";
var l09_2;
(function (l09_2) {
    class Troposphere {
        constructor(_cnt, _max, _dim) {
            this.cloudArray = [];
            for (let i = 0; i < _cnt; i++) {
                let cl = new l09_2.Clouds([Math.floor(Math.random() * l09_2.canvas.width), Math.floor(Math.random() * _max)], _dim);
                this.cloudArray.push(cl);
            }
        }
        draw() {
            for (let cloud of this.cloudArray) {
                cloud.draw();
            }
        }
        update() {
            for (let cloud of this.cloudArray) {
                cloud.move();
            }
        }
    }
    l09_2.Troposphere = Troposphere;
})(l09_2 || (l09_2 = {}));
//# sourceMappingURL=troposphere.js.map