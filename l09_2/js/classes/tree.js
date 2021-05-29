"use strict";
var l09_2;
(function (l09_2) {
    class Tree {
        constructor() {
            let h = Math.random() * (l09_2.canvas.height / 4) + l09_2.canvas.height / 2;
            let w = h / 20;
            this.dimensions = [w, h];
            this.position = [Math.random() * l09_2.canvas.width, l09_2.canvas.height];
        }
        draw() {
            l09_2.context.beginPath();
            l09_2.context.fillStyle = "#382900";
            l09_2.context.fillRect(this.position[0], this.position[1], this.dimensions[0], -this.dimensions[1]);
            l09_2.context.closePath();
            l09_2.context.beginPath();
            l09_2.context.arc(this.position[0] + this.dimensions[0] / 2, this.position[1] - this.dimensions[1], this.dimensions[1] / 3, 0, 2 * Math.PI);
            l09_2.context.fillStyle = "green";
            l09_2.context.fill();
            l09_2.context.stroke();
        }
    }
    l09_2.Tree = Tree;
})(l09_2 || (l09_2 = {}));
//# sourceMappingURL=tree.js.map