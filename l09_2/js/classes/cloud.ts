namespace l09_2 {
    export class Clouds {
        position: number[];
        dimensions: number[];
        velocity: number;

        constructor(_pos: number[], _dim: number[]) {
            this.position = _pos;
            this.dimensions = _dim;
            let mag: number = 5;
            this.velocity = Math.random() * mag * 2 - mag;
        }

        draw(): void {
            context.beginPath();
            context.ellipse(this.position[0], this.position[1], this.dimensions[0], this.dimensions[1], 0, 0, 2 * Math.PI);
            context.closePath();
            context.fillStyle = "white";
            context.fill();
            context.stroke();
        }

        move(): void {
            this.position[0] += this.velocity;
            if (this.position[0] > canvas.width || this.position[0] < 0) {
                this.velocity *= -1;
            }
            this.draw();
        }
    }
}