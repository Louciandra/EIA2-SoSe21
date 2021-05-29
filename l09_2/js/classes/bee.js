"use strict";
var l09_2;
(function (l09_2) {
    class Bee {
        constructor(_home) {
            this.position = _home;
            let w = Math.random() * 40 + 10;
            this.size = [w, w / 2];
            let mag = 10;
            this.speed = [Math.random() * mag * 2 - mag, Math.random() * mag * 2 - mag];
        }
        draw() {
            l09_2.context.beginPath();
            l09_2.context.ellipse(this.position[0], this.position[1], this.size[0], this.size[1], 0, 0, Math.PI * 2);
            l09_2.context.fillStyle = "yellow";
            l09_2.context.fill();
        }
        move() {
            for (let i = 0; i < 2; i++) {
                this.position[i] += this.speed[i];
            }
            if (this.position[0] + this.size[0] / 2 > l09_2.canvas.width || this.position[0] - this.size[0] / 2 < 0) {
                this.speed[0] *= -1;
            }
            if (this.position[1] + this.size[1] / 2 > l09_2.canvas.height || this.position[1] - this.size[1] / 2 < 0) {
                this.speed[1] *= -1;
            }
            this.draw();
        }
    }
    l09_2.Bee = Bee;
})(l09_2 || (l09_2 = {}));
//# sourceMappingURL=bee.js.map