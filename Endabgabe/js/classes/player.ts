namespace abschlussarbeit {
    export class Player extends Human {
        vel: number[];
        wahrnehmung: number;
        

        constructor(_pos: number[], _r: number, _t1: boolean, _i: number) {
            super(_pos, _r);
            this.ungenauigkeit = (Math.random() * (uncMax - uncMin)) + uncMin;
            this.speed = (Math.random() * (speedMax - speedMin)) + speedMin;
            this.vel = [0, 0];
            this.team1 = _t1;
            if (this.team1) {
                this.color = col1;
                this.home = teamOnePos[_i];
            } else {
                this.color = col2;
                this.home = teamTwoPos[_i];
            }
            this.wahrnehmung = 600;
            this.trickNr = _i + 1;
            this.onField = true;
            this.referee = false;
        }

        update(_b: Ball, _touch: boolean, touchingP: Human): void {
            if (!_touch) {
                if (distance(this.pos, _b.position) <= this.wahrnehmung) {
                    ctx.globalAlpha = 0.33;
                    ctx.strokeStyle = "black";
                    ctx.beginPath();
                    ctx.moveTo(this.pos[0], this.pos[1]);
                    ctx.lineTo(_b.position[0], _b.position[1]);
                    ctx.closePath();
                    ctx.lineWidth = 5;
                    ctx.stroke();

                    this.vel = getVelVec(this.pos, _b.position);
                } else {
                    this.vel = getVelVec(this.pos, this.home);
                }

                for (let i: number = 0; i < 2; i++) {
                    this.pos[i] += this.vel[i] * this.speed;
                }
            }
            this.draw(touchingP);
        }

        checkForTouch(_b: Ball): boolean {
            return this.radius + _b.radius > distance(this.pos, _b.position);
        }
    }
}