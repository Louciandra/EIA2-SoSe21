namespace l11_2 {
    export class Cloud extends Moving {
        constructor() {
            let mag: number = 5;
            super(mag, canvas.width / 8, "white");
            this.position[0] = Math.random() * canvas.width;
            this.position[1] = Math.floor(Math.random() * wiesenStart / 3);
            this.speed[1] = 0;
        }
    }
}