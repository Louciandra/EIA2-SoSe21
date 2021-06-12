"use strict";
var l10_2;
(function (l10_2) {
    class Moving {
        constructor(mag, w, _color) {
            this.position = [];
            this.position[0] = Math.random() * l10_2.canvas.width;
            this.size = [w, w / 3];
            this.speed = [Math.random() * mag * 2 - mag, Math.random() * mag * 2 - mag];
            this.color = _color;
        }
        draw() {
            l10_2.context.beginPath();
            l10_2.context.ellipse(this.position[0], this.position[1], this.size[0], this.size[1], 0, 0, Math.PI * 2);
            l10_2.context.fillStyle = this.color;
            l10_2.context.fill();
        }
        move() {
            for (let i = 0; i < 2; i++) {
                this.position[i] += this.speed[i];
            }
            if (this.position[0] + this.size[0] / 2 > l10_2.canvas.width || this.position[0] - this.size[0] / 2 < 0) {
                this.speed[0] *= -1;
            }
            if (this.position[1] + this.size[1] / 2 > l10_2.canvas.height || this.position[1] - this.size[1] / 2 < 0) {
                this.speed[1] *= -1;
            }
            this.draw();
        }
    }
    l10_2.Moving = Moving;
})(l10_2 || (l10_2 = {}));
//# sourceMappingURL=moving.js.map