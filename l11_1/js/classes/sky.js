"use strict";
var l11_1;
(function (l11_1) {
    class Sky {
        constructor(_c) {
            this.dimensions = [l11_1.canvas.width, l11_1.canvas.height];
            this.color = _c;
        }
        draw() {
            l11_1.context.fillStyle = this.color;
            l11_1.context.fillRect(0, 0, this.dimensions[0], this.dimensions[1]);
        }
    }
    l11_1.Sky = Sky;
})(l11_1 || (l11_1 = {}));
//# sourceMappingURL=sky.js.map