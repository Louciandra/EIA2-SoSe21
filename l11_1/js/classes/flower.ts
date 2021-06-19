namespace l11_1 {

    export class Flower {
        innerPoints: number[][] = [];
        outerPoints: number[][] = [];
        position: number[];
        dimensions: number[];
        color: string;
        nektar: number;
        size: number;

        constructor(_cnt: number, _pos: number[], _size: number, _h: number, _w: number) {
            this.position = _pos;
            this.size = _size;
            this.dimensions = [_w, _h];
            for (let i: number = 0; i < _cnt; i++) {
                // Die folgenden 2 Zeilen sind von https://stackoverflow.com/questions/7198144/how-to-draw-a-n-sided-regular-polygon-in-cartesian-coordinates
                let x: number = this.size / 5 * Math.cos(2 * Math.PI * i / _cnt) + _pos[0];
                let y: number = this.size / 5 * Math.sin(2 * Math.PI * i / _cnt) + _pos[1] - this.dimensions[1];
                let vtxPos: number[] = [x, y];
                this.innerPoints.push(vtxPos);
                x = this.size * Math.cos(2 * Math.PI * i / _cnt) + this.position[0];
                y = this.size * Math.sin(2 * Math.PI * i / _cnt) + this.position[1] - this.dimensions[1];
                vtxPos = [x, y];
                this.outerPoints.push(vtxPos);
            }
            this.nektar = Math.round(Math.random() * 100);
            this.color = getRandomColor();
        }

        draw(): void {
            context.fillStyle = "green";
            context.fillRect(this.position[0] - this.dimensions[0] / 2, this.position[1], this.dimensions[0], - this.dimensions[1]);
            context.beginPath();
            context.moveTo(this.innerPoints[0][0], this.innerPoints[0][1]);
            for (let i: number = 0; i < this.innerPoints.length; i++) {
                context.bezierCurveTo(this.outerPoints[i][0], this.outerPoints[i][1], this.outerPoints[(i + 1) % this.innerPoints.length][0], this.outerPoints[(i + 1) % this.innerPoints.length][1], this.innerPoints[(i + 1) % this.innerPoints.length][0], this.innerPoints[(i + 1 ) % this.innerPoints.length][1]);
            }
            context.closePath();
            context.fillStyle = this.color;
            context.fill();
            context.strokeStyle = "black";
            context.stroke();
            context.fillStyle = "hsl(40, 100%, " + this.nektar + "%)";
            context.beginPath();
            context.arc(this.position[0], this.position[1] + -this.dimensions[1], this.size / 5, 0, Math.PI * 2);
            context.fill();
            if (this.nektar < 100) {
                this.nektar += 0.5;
            }
        }
    }

    function getRandomColor(): string {
        let hue: number = Math.round(Math.random() * 360);
        return "hsl(" + hue + ", 100%, 50%)";
    }
}