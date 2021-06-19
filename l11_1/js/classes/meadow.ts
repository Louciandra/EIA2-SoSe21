namespace l11_1 {
    export class Meadow {
        flowerArray: Flower[] = [];

        constructor(_meadowSize: number, _max: number) {
            for (let i: number = 0; i < _meadowSize; i++) {
                let petalCnt: number = Math.ceil(Math.random() * 3) + 4;
                let maxsize: number = canvas.width / 18;
                let size: number = Math.ceil(Math.random() * maxsize) + maxsize / 5;
                let posX: number = Math.random() * (canvas.width - size) + size;
                let h: number = Math.floor(Math.random() * canvas.height / 8) + size;
                let posY: number = Math.random() * (canvas.height - (size + h + _max)) + size + h + _max;
                let flower: Flower = new Flower(petalCnt, [posX, posY], size, h, h / 20);
                this.flowerArray.push(flower);
            }
        }

        draw(): void {
            for (let flower of this.flowerArray) {
                flower.draw();
            }
        }
    }
}