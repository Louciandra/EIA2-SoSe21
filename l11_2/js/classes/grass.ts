namespace l11_2 {
    export class Grass {
        color: string;
        dimensions: number[];
        height: number;

        constructor(_w: number, _h: number, _y: number, _col: string) {
            this.color = _col;
            this.dimensions = [_w, _h];
            this.height = _y;
        }

        draw(): void {
            context.fillStyle = this.color;
            context.fillRect(0, this.height + 1, this.dimensions[0] - 1, this.dimensions[1] - 1);
            context.strokeRect(0, this.height, this.dimensions[0], this.dimensions[1]);
        }
    }
}