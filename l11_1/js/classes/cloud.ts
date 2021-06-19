namespace l11_1 {
    export class Cloud extends Moving {
        constructor() {
            let mag: number = 5;
            super(mag, canvas.width / 8, "white");
            this.position[1] = Math.floor(Math.random() * wiesenStart / 2);
            this.speed[1] = 0;
        }
    }
}