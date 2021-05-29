"use strict";
var l09_2;
(function (l09_2) {
    class Clouds {
        constructor(_pos, _dim) {
            this.position = _pos;
            this.dimensions = _dim;
            let mag = 5;
            this.velocity = Math.random() * mag * 2 - mag;
        }
        draw() {
            l09_2.context.beginPath();
            l09_2.context.ellipse(this.position[0], this.position[1], this.dimensions[0], this.dimensions[1], 0, 0, 2 * Math.PI);
            l09_2.context.closePath();
            l09_2.context.fillStyle = "white";
            l09_2.context.fill();
            l09_2.context.stroke();
        }
        move() {
            this.position[0] += this.velocity;
            if (this.position[0] > l09_2.canvas.width || this.position[0] < 0) {
                this.velocity *= -1;
            }
            this.draw();
        }
    }
    l09_2.Clouds = Clouds;
})(l09_2 || (l09_2 = {}));
//# sourceMappingURL=cloud.js.map