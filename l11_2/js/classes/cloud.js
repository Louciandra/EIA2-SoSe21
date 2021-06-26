"use strict";
var l11_2;
(function (l11_2) {
    class Cloud extends l11_2.Moving {
        constructor() {
            let mag = 5;
            super(mag, l11_2.canvas.width / 8, "white");
            this.position[0] = Math.random() * l11_2.canvas.width;
            this.position[1] = Math.floor(Math.random() * l11_2.wiesenStart / 3);
            this.speed[1] = 0;
        }
    }
    l11_2.Cloud = Cloud;
})(l11_2 || (l11_2 = {}));
//# sourceMappingURL=cloud.js.map