"use strict";
var abschlussarbeit;
(function (abschlussarbeit) {
    class Ball {
        constructor(_unc, _fric, _r) {
            this.position = [abschlussarbeit.spielwiese.width / 2, abschlussarbeit.spielwiese.height / 2];
            this.vel = [0, 0];
            this.radius = _r;
            this.friction = _fric / 100;
            this.uncertainty = _unc;
        }
        draw() {
            abschlussarbeit.ctx.globalAlpha = 1;
            abschlussarbeit.ctx.beginPath();
            abschlussarbeit.ctx.arc(this.position[0], this.position[1], this.radius, 0, Math.PI * 2);
            if (this.seitenaus) {
                abschlussarbeit.ctx.fillStyle = "red";
            }
            else if (this.torseitenaus) {
                abschlussarbeit.ctx.fillStyle = "blue";
            }
            else {
                abschlussarbeit.ctx.fillStyle = "white";
            }
            abschlussarbeit.ctx.fill();
            abschlussarbeit.ctx.strokeStyle = "black";
            abschlussarbeit.ctx.lineWidth = this.radius / 3;
            abschlussarbeit.ctx.stroke();
        }
        update(_touch) {
            let auszone = [37, 33, 39, 30];
            if (!_touch) {
                for (let i in this.vel) {
                    this.position[i] += this.vel[i];
                }
                for (let i in this.vel) {
                    this.vel[i] *= 1 - this.friction;
                }
            }
            if (this.position[0] < auszone[0]) {
                if (this.position[1] > 490 && this.position[1] < 870) {
                    abschlussarbeit.score[1]++;
                    this.position = [850, 680];
                    this.vel = [0, 0];
                    abschlussarbeit.resetPlayers();
                }
                else {
                    this.torseitenaus = true;
                    this.vel = [0, 0];
                }
            }
            else if (this.position[0] > abschlussarbeit.spielwiese.width - auszone[2]) {
                if (this.position[1] > 490 && this.position[1] < 870) {
                    abschlussarbeit.score[0]++;
                    this.position = [1250, 680];
                    this.vel = [0, 0];
                    abschlussarbeit.resetPlayers();
                }
                else {
                    this.torseitenaus = true;
                    this.vel = [0, 0];
                }
            }
            else if (this.position[1] < auszone[1] || this.position[1] > abschlussarbeit.spielwiese.height - auszone[3]) {
                this.seitenaus = true;
                this.vel = [0, 0];
            }
            else {
                this.seitenaus = false;
                this.torseitenaus = false;
            }
            this.draw();
        }
        kick(_t, _touch, _p) {
            if (_touch) {
                let clickAngle = abschlussarbeit.findClickAngle(_p.pos, _t);
                this.position = [Math.cos(clickAngle) * 1.5 * _p.radius + _p.pos[0], Math.sin(clickAngle) * -_p.radius * 1.5 + _p.pos[1]];
                let poss = abschlussarbeit.getSpan(this.position, _t, this.uncertainty);
                let rand = Math.random();
                let newV = [];
                for (let i = 0; i < 2; i++) {
                    newV[i] = poss[0][i] + rand * (poss[1][i] - poss[0][i]);
                }
                for (let i in this.vel) {
                    this.vel[i] = this.friction * (newV[i]);
                }
                for (let i in this.vel) {
                    this.position[i] += this.vel[i];
                }
                for (let i in this.vel) {
                    this.vel[i] *= 1 - this.friction;
                }
            }
        }
    }
    abschlussarbeit.Ball = Ball;
})(abschlussarbeit || (abschlussarbeit = {}));
//# sourceMappingURL=ball.js.map