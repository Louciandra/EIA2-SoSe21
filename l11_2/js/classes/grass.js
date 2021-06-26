"use strict";
var l11_2;
(function (l11_2) {
    class Grass {
        constructor(_w, _h, _y, _col) {
            this.color = _col;
            this.dimensions = [_w, _h];
            this.height = _y;
        }
        draw() {
            l11_2.context.fillStyle = this.color;
            l11_2.context.fillRect(0, this.height + 1, this.dimensions[0] - 1, this.dimensions[1] - 1);
            l11_2.context.strokeRect(0, this.height, this.dimensions[0], this.dimensions[1]);
        }
    }
    l11_2.Grass = Grass;
})(l11_2 || (l11_2 = {}));
//# sourceMappingURL=grass.js.map