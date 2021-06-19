"use strict";
var l11_1;
(function (l11_1) {
    class Mountain {
        constructor(_min, _max, _cnt, _col) {
            this.color = _col;
            this.coordinates = [[0, _max + 1]];
            let prevx = this.coordinates[0][0];
            for (let i = 1; i < _cnt * 2; i++) {
                let x = prevx + Math.random() * ((l11_1.canvas.width - prevx) / (_cnt / 2));
                prevx = x;
                let y = Math.random() * _max;
                let pos = [x, y];
                this.coordinates.push(pos);
            }
            this.coordinates[this.coordinates.length - 1] = [l11_1.canvas.width, _max + 1];
        }
        draw() {
            l11_1.context.beginPath();
            l11_1.context.moveTo(this.coordinates[0][0], this.coordinates[0][1]);
            for (let i = 1; i < this.coordinates.length; i++) {
                l11_1.context.lineTo(this.coordinates[i][0], this.coordinates[i][1]);
            }
            l11_1.context.fillStyle = this.color;
            l11_1.context.closePath();
            l11_1.context.fill();
            l11_1.context.stroke();
        }
    }
    l11_1.Mountain = Mountain;
})(l11_1 || (l11_1 = {}));
//# sourceMappingURL=mountain.js.map