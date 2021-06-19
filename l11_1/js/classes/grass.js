"use strict";
var l11_1;
(function (l11_1) {
    class Grass {
        constructor(_w, _h, _y, _col) {
            this.color = _col;
            this.dimensions = [_w, _h];
            this.height = _y;
        }
        draw() {
            l11_1.context.fillStyle = this.color;
            l11_1.context.fillRect(0, this.height + 1, this.dimensions[0] - 1, this.dimensions[1] - 1);
            l11_1.context.strokeRect(0, this.height, this.dimensions[0], this.dimensions[1]);
        }
    }
    l11_1.Grass = Grass;
})(l11_1 || (l11_1 = {}));
//# sourceMappingURL=grass.js.map