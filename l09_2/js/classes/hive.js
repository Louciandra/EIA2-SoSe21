"use strict";
var l09_2;
(function (l09_2) {
    class Hive {
        constructor(_cnt) {
            this.beeArray = [];
            for (let i = 0; i < _cnt; i++) {
                let newBee = new l09_2.Bee([Math.random() * l09_2.canvas.width, Math.random() * l09_2.canvas.height]);
                this.beeArray.push(newBee);
            }
        }
        draw() {
            for (let bee of this.beeArray) {
                bee.draw();
            }
        }
        update() {
            for (let bee of this.beeArray) {
                bee.move();
            }
        }
    }
    l09_2.Hive = Hive;
})(l09_2 || (l09_2 = {}));
//# sourceMappingURL=hive.js.map