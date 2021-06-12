"use strict";
var l10_2;
(function (l10_2) {
    class Bee extends l10_2.Moving {
        constructor() {
            let w = Math.random() * 40 + 10;
            let mag = 10;
            super(mag, w, "yellow");
            this.position[1] = Math.random() * l10_2.canvas.height;
        }
    }
    l10_2.Bee = Bee;
})(l10_2 || (l10_2 = {}));
//# sourceMappingURL=bee.js.map