namespace l09_2 {

    export class Hive {
        beeArray: Bee[] = [];
        constructor(_cnt: number) {
            for (let i: number = 0; i < _cnt; i++) {
                let newBee: Bee = new Bee([Math.random() * canvas.width, Math.random() *  canvas.height]);
                this.beeArray.push(newBee);
            }
        }

        draw(): void {
            for (let bee of this.beeArray) {
                bee.draw();
            }
        }

        update(): void {
            for (let bee of this.beeArray) {
                bee.move();
            }
        }
    }
}