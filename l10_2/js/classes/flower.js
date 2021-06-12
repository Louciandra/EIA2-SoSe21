"use strict";
var l10_2;
(function (l10_2) {
    class Flower {
        constructor(_cnt, _pos, _size, _h, _w) {
            this.innerPoints = [];
            this.outerPoints = [];
            this.position = _pos;
            this.dimensions = [_w, _h];
            for (let i = 0; i < _cnt; i++) {
                // Die folgenden 2 Zeilen sind von https://stackoverflow.com/questions/7198144/how-to-draw-a-n-sided-regular-polygon-in-cartesian-coordinates
                let x = _size / 5 * Math.cos(2 * Math.PI * i / _cnt) + _pos[0];
                let y = _size / 5 * Math.sin(2 * Math.PI * i / _cnt) + _pos[1] - this.dimensions[1];
                let vtxPos = [x, y];
                this.innerPoints.push(vtxPos);
                x = _size * Math.cos(2 * Math.PI * i / _cnt) + this.position[0];
                y = _size * Math.sin(2 * Math.PI * i / _cnt) + this.position[1] - this.dimensions[1];
                vtxPos = [x, y];
                this.outerPoints.push(vtxPos);
            }
            this.color = getRandomColor();
        }
        draw() {
            l10_2.context.fillStyle = "green";
            l10_2.context.fillRect(this.position[0] - this.dimensions[0] / 2, this.position[1], this.dimensions[0], -this.dimensions[1]);
            l10_2.context.beginPath();
            l10_2.context.moveTo(this.innerPoints[0][0], this.innerPoints[0][1]);
            for (let i = 0; i < this.innerPoints.length; i++) {
                l10_2.context.bezierCurveTo(this.outerPoints[i][0], this.outerPoints[i][1], this.outerPoints[(i + 1) % this.innerPoints.length][0], this.outerPoints[(i + 1) % this.innerPoints.length][1], this.innerPoints[(i + 1) % this.innerPoints.length][0], this.innerPoints[(i + 1) % this.innerPoints.length][1]);
            }
            l10_2.context.closePath();
            l10_2.context.fillStyle = this.color;
            l10_2.context.fill();
            l10_2.context.strokeStyle = "black";
            l10_2.context.stroke();
        }
    }
    l10_2.Flower = Flower;
    function getRandomColor() {
        let hue = Math.round(Math.random() * 360);
        return "hsl(" + hue + ", 100%, 50%)";
    }
})(l10_2 || (l10_2 = {}));
//# sourceMappingURL=flower.js.map