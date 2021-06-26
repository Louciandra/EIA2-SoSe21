"use strict";
var l11_2;
(function (l11_2) {
    class Tree {
        constructor() {
            let h = Math.random() * (l11_2.canvas.height / 4) + l11_2.canvas.height / 2;
            let w = h / 20;
            this.dimensions = [w, h];
            this.position = [Math.random() * l11_2.canvas.width, l11_2.canvas.height];
        }
        draw() {
            l11_2.context.beginPath();
            l11_2.context.fillStyle = "#382900";
            l11_2.context.fillRect(this.position[0], this.position[1], this.dimensions[0], -this.dimensions[1]);
            l11_2.context.closePath();
            l11_2.context.beginPath();
            l11_2.context.arc(this.position[0] + this.dimensions[0] / 2, this.position[1] - this.dimensions[1], this.dimensions[1] / 3, 0, 2 * Math.PI);
            l11_2.context.fillStyle = "green";
            l11_2.context.fill();
            l11_2.context.stroke();
        }
    }
    l11_2.Tree = Tree;
})(l11_2 || (l11_2 = {}));
//# sourceMappingURL=tree.js.map