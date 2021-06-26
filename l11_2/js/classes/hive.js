"use strict";
var l11_2;
(function (l11_2) {
    class Hive {
        constructor(_pos) {
            this.pos = _pos;
            this.dim = [l11_2.canvas.width / 30, l11_2.canvas.height / 10];
            this.nektar = 0;
        }
        draw() {
            l11_2.context.beginPath();
            l11_2.context.ellipse(this.pos[0], this.pos[1], this.dim[0], this.dim[1], 0, 0, 2 * Math.PI);
            let grad = l11_2.context.createLinearGradient(this.pos[0] - this.dim[0], this.pos[1] - this.dim[1], this.pos[0] - this.dim[0], this.pos[1] + this.dim[1]);
            grad.addColorStop(1, "#7a5523");
            grad.addColorStop(0, "#ffaf45");
            l11_2.context.fillStyle = grad;
            l11_2.context.fill();
        }
    }
    l11_2.Hive = Hive;
})(l11_2 || (l11_2 = {}));
//# sourceMappingURL=hive.js.map