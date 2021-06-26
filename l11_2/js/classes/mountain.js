"use strict";
var l11_2;
(function (l11_2) {
    class Mountain {
        constructor(_min, _max, _cnt, _col) {
            this.color = _col;
            this.coordinates = [[0, _max + 1]];
            let prevx = this.coordinates[0][0];
            for (let i = 1; i < _cnt * 2; i++) {
                let x = prevx + Math.random() * ((l11_2.canvas.width - prevx) / (_cnt / 2));
                prevx = x;
                let y = Math.random() * _max;
                let pos = [x, y];
                this.coordinates.push(pos);
            }
            this.coordinates[this.coordinates.length - 1] = [l11_2.canvas.width, _max + 1];
        }
        draw() {
            l11_2.context.beginPath();
            l11_2.context.moveTo(this.coordinates[0][0], this.coordinates[0][1]);
            for (let i = 1; i < this.coordinates.length; i++) {
                l11_2.context.lineTo(this.coordinates[i][0], this.coordinates[i][1]);
            }
            l11_2.context.fillStyle = this.color;
            l11_2.context.closePath();
            l11_2.context.fill();
            l11_2.context.stroke();
        }
    }
    l11_2.Mountain = Mountain;
})(l11_2 || (l11_2 = {}));
//# sourceMappingURL=mountain.js.map