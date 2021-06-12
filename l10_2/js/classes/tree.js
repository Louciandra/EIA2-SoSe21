"use strict";
var l10_2;
(function (l10_2) {
    class Tree {
        constructor() {
            let h = Math.random() * (l10_2.canvas.height / 4) + l10_2.canvas.height / 2;
            let w = h / 20;
            this.dimensions = [w, h];
            this.position = [Math.random() * l10_2.canvas.width, l10_2.canvas.height];
        }
        draw() {
            l10_2.context.beginPath();
            l10_2.context.fillStyle = "#382900";
            l10_2.context.fillRect(this.position[0], this.position[1], this.dimensions[0], -this.dimensions[1]);
            l10_2.context.closePath();
            l10_2.context.beginPath();
            l10_2.context.arc(this.position[0] + this.dimensions[0] / 2, this.position[1] - this.dimensions[1], this.dimensions[1] / 3, 0, 2 * Math.PI);
            l10_2.context.fillStyle = "green";
            l10_2.context.fill();
            l10_2.context.stroke();
        }
    }
    l10_2.Tree = Tree;
})(l10_2 || (l10_2 = {}));
//# sourceMappingURL=tree.js.map