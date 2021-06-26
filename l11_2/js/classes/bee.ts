namespace l11_2 {
    export class Bee extends Moving {
        home: number[];
        target: number[];
        mag: number;
        targetid: number;
        nektar: number;

        constructor() {
            let w: number = Math.random() * 40 + 10;
            let _mag: number = 10;
            super(_mag, w, "yellow");
            this.mag = _mag / 2;
            this.home = hive.pos;
            this.target = this.home;
            this.position = [Math.random() * canvas.width, Math.random() * canvas.height];
            this.nektar = 0;
        }

        move(): void {
            let dist: number = this.distance(this.target[0], this.target[1], this.position[0], this.position[1]);
            
            if (dist < 10) {
                if (this.target == this.home) {
                    this.targetid = Math.floor(Math.random() * meadow.flowerArray.length);
                    let targetflower: Flower = meadow.flowerArray[this.targetid];
                    this.target = [targetflower.position[0], targetflower.position[1] - targetflower.dimensions[1]];
                    hive.nektar += this.nektar;
                } else {
                    this.target = this.home;
                    this.nektar = meadow.flowerArray[this.targetid].nektar;
                    meadow.flowerArray[this.targetid].nektar = 0;
                }
            }

            dist = this.distance(this.target[0], this.target[1], this.position[0], this.position[1]);

            for (let i: number = 0; i < 2; i++) {
                this.speed[i] = (this.mag / dist) * (this.target[i] - this.position[i]);
            }

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

        distance(x1: number, y1: number, x2: number, y2: number): number {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }
        
    }
}