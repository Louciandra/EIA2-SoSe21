"use strict";
var l09_2;
(function (l09_2) {
    class Sky {
        constructor(_c) {
            this.dimensions = [l09_2.canvas.width, l09_2.canvas.height];
            this.color = _c;
        }
        draw() {
            l09_2.context.fillStyle = this.color;
            l09_2.context.fillRect(0, 0, this.dimensions[0], this.dimensions[1]);
        }
    }
    l09_2.Sky = Sky;
})(l09_2 || (l09_2 = {}));
//# sourceMappingURL=sky.js.map