"use strict";
var l10_2;
(function (l10_2) {
    class Sky {
        constructor(_c) {
            this.dimensions = [l10_2.canvas.width, l10_2.canvas.height];
            this.color = _c;
        }
        draw() {
            l10_2.context.fillStyle = this.color;
            l10_2.context.fillRect(0, 0, this.dimensions[0], this.dimensions[1]);
        }
    }
    l10_2.Sky = Sky;
})(l10_2 || (l10_2 = {}));
//# sourceMappingURL=sky.js.map