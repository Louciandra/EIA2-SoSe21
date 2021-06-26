namespace l11_2 {
    export class Tree {
        dimensions: number[];
        position: number[];

        constructor() {
            let h: number = Math.random() * (canvas.height / 4) + canvas.height / 2;
            let w: number = h / 20;
            this.dimensions = [w, h];

            this.position = [Math.random() * canvas.width, canvas.height];
        }

        draw(): void {
            context.beginPath();
            context.fillStyle = "#382900";
            context.fillRect(this.position[0], this.position[1], this.dimensions[0], -this.dimensions[1]);
            context.closePath();

            context.beginPath();
            context.arc(this.position[0] + this.dimensions[0] / 2, this.position[1] - this.dimensions[1], this.dimensions[1] / 3, 0, 2 * Math.PI);
            context.fillStyle = "green";
            context.fill();
            context.stroke();
        }
    }
}