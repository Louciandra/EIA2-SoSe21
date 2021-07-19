"use strict";
var abschlussarbeit;
(function (abschlussarbeit) {
    class Player extends abschlussarbeit.Human {
        constructor(_pos, _r, _t1, _i) {
            super(_pos, _r);
            this.ungenauigkeit = (Math.random() * (abschlussarbeit.uncMax - abschlussarbeit.uncMin)) + abschlussarbeit.uncMin;
            this.speed = (Math.random() * (abschlussarbeit.speedMax - abschlussarbeit.speedMin)) + abschlussarbeit.speedMin;
            this.vel = [0, 0];
            this.team1 = _t1;
            if (this.team1) {
                this.color = abschlussarbeit.col1;
                this.home = abschlussarbeit.teamOnePos[_i];
            }
            else {
                this.color = abschlussarbeit.col2;
                this.home = abschlussarbeit.teamTwoPos[_i];
            }
            this.wahrnehmung = 600;
            this.trickNr = _i + 1;
            this.onField = true;
            this.referee = false;
        }
        update(_b, _touch, touchingP) {
            if (!_touch) {
                if (abschlussarbeit.distance(this.pos, _b.position) <= this.wahrnehmung) {
                    abschlussarbeit.ctx.globalAlpha = 0.33;
                    abschlussarbeit.ctx.strokeStyle = "black";
                    abschlussarbeit.ctx.beginPath();
                    abschlussarbeit.ctx.moveTo(this.pos[0], this.pos[1]);
                    abschlussarbeit.ctx.lineTo(_b.position[0], _b.position[1]);
                    abschlussarbeit.ctx.closePath();
                    abschlussarbeit.ctx.lineWidth = 5;
                    abschlussarbeit.ctx.stroke();
                    this.vel = abschlussarbeit.getVelVec(this.pos, _b.position);
                }
                else {
                    this.vel = abschlussarbeit.getVelVec(this.pos, this.home);
                }
                for (let i = 0; i < 2; i++) {
                    this.pos[i] += this.vel[i] * this.speed;
                }
            }
            this.draw(touchingP);
        }
        checkForTouch(_b) {
            return this.radius + _b.radius > abschlussarbeit.distance(this.pos, _b.position);
        }
    }
    abschlussarbeit.Player = Player;
})(abschlussarbeit || (abschlussarbeit = {}));
//# sourceMappingURL=player.js.map