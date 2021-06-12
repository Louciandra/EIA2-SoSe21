"use strict";
var l10_2;
(function (l10_2) {
    class Cloud extends l10_2.Moving {
        constructor() {
            let mag = 5;
            super(mag, l10_2.canvas.width / 8, "white");
            this.position[1] = Math.floor(Math.random() * l10_2.wiesenStart / 2);
            this.speed[1] = 0;
        }
    }
    l10_2.Cloud = Cloud;
})(l10_2 || (l10_2 = {}));
//# sourceMappingURL=cloud.js.map