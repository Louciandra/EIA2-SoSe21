"use strict";
var l10_2;
(function (l10_2) {
    class Grass {
        constructor(_w, _h, _y, _col) {
            this.color = _col;
            this.dimensions = [_w, _h];
            this.height = _y;
        }
        draw() {
            l10_2.context.fillStyle = this.color;
            l10_2.context.fillRect(0, this.height + 1, this.dimensions[0] - 1, this.dimensions[1] - 1);
            l10_2.context.strokeRect(0, this.height, this.dimensions[0], this.dimensions[1]);
        }
    }
    l10_2.Grass = Grass;
})(l10_2 || (l10_2 = {}));
//# sourceMappingURL=grass.js.map