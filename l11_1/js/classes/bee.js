"use strict";
var l11_1;
(function (l11_1) {
    class Bee extends l11_1.Moving {
        constructor() {
            let w = Math.random() * 40 + 10;
            let mag = 10;
            super(mag, w, "yellow");
            this.position[1] = Math.random() * l11_1.canvas.height;
        }
    }
    l11_1.Bee = Bee;
})(l11_1 || (l11_1 = {}));
//# sourceMappingURL=bee.js.map