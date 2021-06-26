"use strict";
var l11_2;
(function (l11_2) {
    class Sky {
        constructor(_c) {
            this.dimensions = [l11_2.canvas.width, l11_2.canvas.height];
            this.color = _c;
        }
        draw() {
            l11_2.context.fillStyle = this.color;
            l11_2.context.fillRect(0, 0, this.dimensions[0], this.dimensions[1]);
        }
    }
    l11_2.Sky = Sky;
})(l11_2 || (l11_2 = {}));
//# sourceMappingURL=sky.js.map