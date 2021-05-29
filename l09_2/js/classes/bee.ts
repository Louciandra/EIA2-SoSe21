namespace l09_2 {

    export class Bee {
        position: number[];
        size: number[];
        speed: number[];

        constructor(_home: number[]) {
            this.position = _home;
            let w: number = Math.random() * 40 + 10;
            this.size = [w, w / 2];
            let mag: number = 10;
            this.speed = [Math.random() * mag * 2 - mag, Math.random() * mag * 2 - mag];
        }

        draw(): void {
            context.beginPath();
            context.ellipse(this.position[0], this.position[1], this.size[0], this.size[1], 0, 0, Math.PI * 2);
            context.fillStyle = "yellow";
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