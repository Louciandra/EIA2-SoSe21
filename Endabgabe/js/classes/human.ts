namespace abschlussarbeit {
    export class Human {
        pos: number[];
        radius: number;
        color: string;
        home: number[];
        trickNr: number;
        speed: number;
        ungenauigkeit: number;
        onField: boolean;
        team1: boolean;
        referee: boolean;

        constructor(_pos: number[], _r: number) {
            this.pos = _pos;
            this.radius = _r;
        }

        draw(_tP: Human): void {
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            if (_tP == this) {
                ctx.strokeStyle = "yellow";
            } else {
                ctx.strokeStyle = "black";
            }
            ctx.lineWidth = 10;
            ctx.stroke();
        }

        update(_b: Ball, _touch: boolean, touchingP: Human): void { this.draw(touchingP); }

        checkForTouch(_b: Ball): boolean {
            return false;
        }
    }
}