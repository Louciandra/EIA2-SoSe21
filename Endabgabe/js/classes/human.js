"use strict";
var abschlussarbeit;
(function (abschlussarbeit) {
    class Human {
        constructor(_pos, _r) {
            this.pos = _pos;
            this.radius = _r;
        }
        draw(_tP) {
            abschlussarbeit.ctx.globalAlpha = 1;
            abschlussarbeit.ctx.beginPath();
            abschlussarbeit.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
            abschlussarbeit.ctx.fillStyle = this.color;
            abschlussarbeit.ctx.fill();
            if (_tP == this) {
                abschlussarbeit.ctx.strokeStyle = "yellow";
            }
            else {
                abschlussarbeit.ctx.strokeStyle = "black";
            }
            abschlussarbeit.ctx.lineWidth = 10;
            abschlussarbeit.ctx.stroke();
        }
        update(_b, _touch, touchingP) { this.draw(touchingP); }
        checkForTouch(_b) {
            return false;
        }
    }
    abschlussarbeit.Human = Human;
})(abschlussarbeit || (abschlussarbeit = {}));
//# sourceMappingURL=human.js.map