namespace l09_2 {
    export class Troposphere {
        cloudArray: Clouds[] = [];
        
        constructor(_cnt: number, _max: number, _dim: number[]) {
            for (let i: number = 0; i < _cnt; i++) {
                let cl: Clouds = new Clouds([Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * _max)], _dim);
                this.cloudArray.push(cl);
            }
        }

        draw(): void {
            for (let cloud of this.cloudArray) {
                cloud.draw();
            }
        }

        update(): void {
            for (let cloud of this.cloudArray) {
                cloud.move();
            }
        }
    }
}