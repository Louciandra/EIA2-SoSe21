"use strict";
var abschlussarbeit;
(function (abschlussarbeit) {
    class Referee extends abschlussarbeit.Human {
        constructor(_pos, _linie) {
            super(_pos, 40);
            if (_linie) {
                this.color = "yellow";
            }
            else {
                this.color = "black";
            }
            this.referee = true;
            this.linienrichter = _linie;
        }
        draw(_tP) {
            abschlussarbeit.ctx.globalAlpha = 0.75;
            abschlussarbeit.ctx.beginPath();
            abschlussarbeit.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
            abschlussarbeit.ctx.fillStyle = this.color;
            abschlussarbeit.ctx.fill();
            abschlussarbeit.ctx.strokeStyle = "white";
            abschlussarbeit.ctx.lineWidth = 10;
            abschlussarbeit.ctx.stroke();
        }
        update(_b, _touch, touchingP) {
            if (!_touch) {
                if (this.linienrichter) {
                    let xD = abschlussarbeit.distance([this.pos[0], 0], [_b.position[0], 0]);
                    if (xD == 0) {
                        xD = 0.1;
                    }
                    this.pos[0] += (_b.position[0] - this.pos[0]) / xD * 5;
                }
                else {
                    let d = abschlussarbeit.distance(this.pos, abschlussarbeit.ball.position);
                    if (d == 0) {
                        d = 0.1;
                    }
                    if (d > 300) {
                        for (let i = 0; i < 2; i++) {
                            this.pos[i] += (_b.position[i] - this.pos[i]) / d * 5;
                        }
                    }
                }
            }
            this.draw(touchingP);
        }
    }
    abschlussarbeit.Referee = Referee;
})(abschlussarbeit || (abschlussarbeit = {}));
//# sourceMappingURL=referee.js.map