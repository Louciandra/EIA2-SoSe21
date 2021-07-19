namespace abschlussarbeit {
    export class Ball {
        position: number[];
        radius: number;
        friction: number;
        uncertainty: number;
        seitenaus: boolean;
        vel: number[];
        torseitenaus: boolean;

        constructor(_unc: number, _fric: number, _r: number) {
            this.position = [spielwiese.width / 2, spielwiese.height / 2];
            this.vel = [0, 0];
            this.radius = _r;
            this.friction = _fric / 100;
            this.uncertainty = _unc;
        }

        draw(): void {
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(this.position[0], this.position[1], this.radius, 0, Math.PI * 2);
            if (this.seitenaus) {
                ctx.fillStyle = "red";
            } else if (this.torseitenaus) {
                ctx.fillStyle = "blue";
            } else {
                ctx.fillStyle = "white";
            }
            
            ctx.fill();
            ctx.strokeStyle = "black";
            ctx.lineWidth = this.radius / 3;
            ctx.stroke();
        }

        update(_touch: boolean): void {
            let auszone: number[] = [37, 33, 39, 30];

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
                    score[1]++;
                    this.position = [850, 680];
                    this.vel = [0, 0];
                    resetPlayers();
                } else {
                    this.torseitenaus = true;
                    this.vel = [0, 0];
                }
            } else if (this.position[0] > spielwiese.width - auszone[2]) {
                if (this.position[1] > 490 && this.position[1] < 870) {
                    score[0]++;
                    this.position = [1250, 680];
                    this.vel = [0, 0];
                    resetPlayers();
                } else {
                    this.torseitenaus = true;
                    this.vel = [0, 0];
                }
            } else if (this.position[1] < auszone[1] || this.position[1] > spielwiese.height - auszone[3]) {
                this.seitenaus = true;
                this.vel = [0, 0];
            } else {
                this.seitenaus = false;
                this.torseitenaus = false;
            }

            this.draw();
        }

        kick(_t: number[], _touch: boolean, _p: Human): void {
            if (_touch) {
                let clickAngle: number = findClickAngle(_p.pos, _t);
                this.position = [Math.cos(clickAngle) * 1.5 * _p.radius + _p.pos[0], Math.sin(clickAngle) * -_p.radius * 1.5 + _p.pos[1]];
                let poss: number[][] = getSpan(this.position, _t, this.uncertainty);
                let rand: number = Math.random();
                let newV: number[] = [];
                for (let i: number = 0; i < 2; i++) {
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
}