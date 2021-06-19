"use strict";
var l11_1;
(function (l11_1) {
    class Cloud extends l11_1.Moving {
        constructor() {
            let mag = 5;
            super(mag, l11_1.canvas.width / 8, "white");
            this.position[1] = Math.floor(Math.random() * l11_1.wiesenStart / 2);
            this.speed[1] = 0;
        }
    }
    l11_1.Cloud = Cloud;
})(l11_1 || (l11_1 = {}));
//# sourceMappingURL=cloud.js.map