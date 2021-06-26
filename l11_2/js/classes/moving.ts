namespace l11_2 {
    export abstract class Moving {
        position: number[] = [];
        size: number[];
        speed: number[];
        color: string;

        constructor(mag: number, w: number, _color: string) {
            this.size = [w, w / 3];
            this.speed = [Math.random() * mag * 2 - mag, Math.random() * mag * 2 - mag];
            this.color = _color;
        }

        draw(): void {
            context.beginPath();
            context.ellipse(this.position[0], this.position[1], this.size[0], this.size[1], 0, 0, Math.PI * 2);
            context.fillStyle = this.color;
            context.fill();
        }

        move(): void {
            for (let i: number = 0; i < 2; i++) {
                this.position[i] += this.speed[i];
            }

            if (this.position[0] + this.size[0] / 2 > canvas.width || this.position[0] - this.size[0] / 2 < 0) {
                this.speed[0] *= -1;
            }
            if (this.position[1] + this.size[1] / 2 > canvas.height || this.position[1] - this.size[1] / 2 < 0) {
                this.speed[1] *= -1;
            }

            this.draw();
        }
    }
}