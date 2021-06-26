"use strict";
var l11_2;
(function (l11_2) {
    class Flower {
        constructor(_cnt, _pos, _size, _h, _w) {
            this.innerPoints = [];
            this.outerPoints = [];
            this.position = _pos;
            this.size = _size;
            this.dimensions = [_w, _h];
            for (let i = 0; i < _cnt; i++) {
                // Die folgenden 2 Zeilen sind von https://stackoverflow.com/questions/7198144/how-to-draw-a-n-sided-regular-polygon-in-cartesian-coordinates
                let x = this.size / 5 * Math.cos(2 * Math.PI * i / _cnt) + _pos[0];
                let y = this.size / 5 * Math.sin(2 * Math.PI * i / _cnt) + _pos[1] - this.dimensions[1];
                let vtxPos = [x, y];
                this.innerPoints.push(vtxPos);
                x = this.size * Math.cos(2 * Math.PI * i / _cnt) + this.position[0];
                y = this.size * Math.sin(2 * Math.PI * i / _cnt) + this.position[1] - this.dimensions[1];
                vtxPos = [x, y];
                this.outerPoints.push(vtxPos);
            }
            this.nektar = Math.round(Math.random() * 100);
            this.color = getRandomColor();
        }
        draw() {
            l11_2.context.fillStyle = "green";
            l11_2.context.fillRect(this.position[0] - this.dimensions[0] / 2, this.position[1], this.dimensions[0], -this.dimensions[1]);
            l11_2.context.beginPath();
            l11_2.context.moveTo(this.innerPoints[0][0], this.innerPoints[0][1]);
            for (let i = 0; i < this.innerPoints.length; i++) {
                l11_2.context.bezierCurveTo(this.outerPoints[i][0], this.outerPoints[i][1], this.outerPoints[(i + 1) % this.innerPoints.length][0], this.outerPoints[(i + 1) % this.innerPoints.length][1], this.innerPoints[(i + 1) % this.innerPoints.length][0], this.innerPoints[(i + 1) % this.innerPoints.length][1]);
            }
            l11_2.context.closePath();
            l11_2.context.fillStyle = this.color;
            l11_2.context.fill();
            l11_2.context.strokeStyle = "black";
            l11_2.context.stroke();
            l11_2.context.fillStyle = "hsl(40, 100%, " + this.nektar + "%)";
            l11_2.context.beginPath();
            l11_2.context.arc(this.position[0], this.position[1] + -this.dimensions[1], this.size / 5, 0, Math.PI * 2);
            l11_2.context.fill();
            if (this.nektar < 100) {
                this.nektar += 0.5;
            }
        }
    }
    l11_2.Flower = Flower;
    function getRandomColor() {
        let hue = Math.round(Math.random() * 360);
        return "hsl(" + hue + ", 100%, 50%)";
    }
})(l11_2 || (l11_2 = {}));
//# sourceMappingURL=flower.js.map