"use strict";
var l11_2;
(function (l11_2) {
    class Bee extends l11_2.Moving {
        constructor() {
            let w = Math.random() * 40 + 10;
            let _mag = 10;
            super(_mag, w, "yellow");
            this.mag = _mag / 2;
            this.home = l11_2.hive.pos;
            this.target = this.home;
            this.position = [Math.random() * l11_2.canvas.width, Math.random() * l11_2.canvas.height];
            this.nektar = 0;
        }
        move() {
            let dist = this.distance(this.target[0], this.target[1], this.position[0], this.position[1]);
            if (dist < 10) {
                if (this.target == this.home) {
                    this.targetid = Math.floor(Math.random() * l11_2.meadow.flowerArray.length);
                    let targetflower = l11_2.meadow.flowerArray[this.targetid];
                    this.target = [targetflower.position[0], targetflower.position[1] - targetflower.dimensions[1]];
                    l11_2.hive.nektar += this.nektar;
                }
                else {
                    this.target = this.home;
                    this.nektar = l11_2.meadow.flowerArray[this.targetid].nektar;
                    l11_2.meadow.flowerArray[this.targetid].nektar = 0;
                }
            }
            dist = this.distance(this.target[0], this.target[1], this.position[0], this.position[1]);
            for (let i = 0; i < 2; i++) {
                this.speed[i] = (this.mag / dist) * (this.target[i] - this.position[i]);
            }
            for (let i = 0; i < 2; i++) {
                this.position[i] += this.speed[i];
            }
            if (this.position[0] + this.size[0] / 2 > l11_2.canvas.width || this.position[0] - this.size[0] / 2 < 0) {
                this.speed[0] *= -1;
            }
            if (this.position[1] + this.size[1] / 2 > l11_2.canvas.height || this.position[1] - this.size[1] / 2 < 0) {
                this.speed[1] *= -1;
            }
            this.draw();
        }
        distance(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }
    }
    l11_2.Bee = Bee;
})(l11_2 || (l11_2 = {}));
//# sourceMappingURL=bee.js.map