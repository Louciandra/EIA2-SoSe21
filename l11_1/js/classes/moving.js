"use strict";
var l11_1;
(function (l11_1) {
    class Moving {
        constructor(mag, w, _color) {
            this.position = [];
            this.position[0] = Math.random() * l11_1.canvas.width;
            this.size = [w, w / 3];
            this.speed = [Math.random() * mag * 2 - mag, Math.random() * mag * 2 - mag];
            this.color = _color;
        }
        draw() {
            l11_1.context.beginPath();
            l11_1.context.ellipse(this.position[0], this.position[1], this.size[0], this.size[1], 0, 0, Math.PI * 2);
            l11_1.context.fillStyle = this.color;
            l11_1.context.fill();
        }
        move() {
            for (let i = 0; i < 2; i++) {
                this.position[i] += this.speed[i];
            }
            if (this.position[0] + this.size[0] / 2 > l11_1.canvas.width || this.position[0] - this.size[0] / 2 < 0) {
                this.speed[0] *= -1;
            }
            if (this.position[1] + this.size[1] / 2 > l11_1.canvas.height || this.position[1] - this.size[1] / 2 < 0) {
                this.speed[1] *= -1;
            }
            this.draw();
        }
    }
    l11_1.Moving = Moving;
})(l11_1 || (l11_1 = {}));
//# sourceMappingURL=moving.js.map