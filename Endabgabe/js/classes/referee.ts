namespace abschlussarbeit {
    export class Referee extends Human {
        linienrichter: boolean;
        constructor(_pos: number[], _linie: boolean) {
            super(_pos, 40);
            if (_linie) {
                this.color = "yellow";
            } else {
                this.color = "black";
            }
            this.referee = true;
            this.linienrichter = _linie;
        }

        draw(_tP: Human): void {
            ctx.globalAlpha = 0.75;
            ctx.beginPath();
            ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 10;
            ctx.stroke();
        }

        update(_b: Ball, _touch: boolean, touchingP: Human): void { 
            if (!_touch) {
                if (this.linienrichter) {
                    let xD: number = distance([this.pos[0], 0], [_b.position[0], 0]);
                    if (xD == 0) {
                        xD = 0.1;
                    }
                    this.pos[0] += (_b.position[0] - this.pos[0]) / xD * 5;
                } else {
                    let d: number = distance(this.pos, ball.position);
                    if (d == 0) {
                        d = 0.1;
                    }
                    if (d > 300) {
                        for (let i: number = 0; i < 2; i++) {
                            this.pos[i] += (_b.position[i] - this.pos[i]) / d * 5;
                        }
                    }
                }
            }

            this.draw(touchingP); 
        }
    }
}