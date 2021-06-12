namespace l10_2 {
    export class Mountain {
        coordinates: number[][];
        color: string;
        constructor(_min: number, _max: number, _cnt: number, _col: string) {
            this.color = _col;
            this.coordinates = [[0, _max + 1]];
            let prevx: number = this.coordinates[0][0];
            for (let i: number = 1; i < _cnt * 2; i++) {
                let x: number = prevx + Math.random() * ((canvas.width - prevx) / (_cnt / 2));
                prevx = x;
                let y: number = Math.random() * _max;
                let pos: number[] = [x, y];
                this.coordinates.push(pos);
            }
            this.coordinates[this.coordinates.length - 1] = [canvas.width, _max + 1];
        }

        draw(): void {
            context.beginPath();
            context.moveTo(this.coordinates[0][0], this.coordinates[0][1]);
            for (let i: number = 1; i < this.coordinates.length; i++) {
                context.lineTo(this.coordinates[i][0], this.coordinates[i][1]);
            }
            context.fillStyle = this.color;
            context.closePath();
            context.fill();
            context.stroke();
        }
    }
}