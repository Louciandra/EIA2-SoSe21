namespace l11_2 {
    export class Hive {
        pos: number[];
        dim: number[];
        nektar: number;

        constructor(_pos: number[]) {
            this.pos = _pos;
            this.dim = [canvas.width / 30, canvas.height / 10];
            this.nektar = 0;
        }

        draw(): void {
            context.beginPath();
            context.ellipse(this.pos[0], this.pos[1], this.dim[0], this.dim[1], 0, 0, 2 * Math.PI);
            let grad: CanvasGradient = context.createLinearGradient(this.pos[0] - this.dim[0], this.pos[1] - this.dim[1], this.pos[0] - this.dim[0], this.pos[1] + this.dim[1]);
            grad.addColorStop(1, "#7a5523");
            grad.addColorStop(0, "#ffaf45");
            context.fillStyle = grad;
            context.fill();
        }
    }
}