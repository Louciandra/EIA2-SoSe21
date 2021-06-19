"use strict";
var l11_1;
(function (l11_1) {
    class Tree {
        constructor() {
            let h = Math.random() * (l11_1.canvas.height / 4) + l11_1.canvas.height / 2;
            let w = h / 20;
            this.dimensions = [w, h];
            this.position = [Math.random() * l11_1.canvas.width, l11_1.canvas.height];
        }
        draw() {
            l11_1.context.beginPath();
            l11_1.context.fillStyle = "#382900";
            l11_1.context.fillRect(this.position[0], this.position[1], this.dimensions[0], -this.dimensions[1]);
            l11_1.context.closePath();
            l11_1.context.beginPath();
            l11_1.context.arc(this.position[0] + this.dimensions[0] / 2, this.position[1] - this.dimensions[1], this.dimensions[1] / 3, 0, 2 * Math.PI);
            l11_1.context.fillStyle = "green";
            l11_1.context.fill();
            l11_1.context.stroke();
        }
    }
    l11_1.Tree = Tree;
})(l11_1 || (l11_1 = {}));
//# sourceMappingURL=tree.js.map