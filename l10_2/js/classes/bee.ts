namespace l10_2 {
    export class Bee extends Moving {
        constructor() {
            let w: number = Math.random() * 40 + 10;
            let mag: number = 10;
            super(mag, w, "yellow");
            this.position[1] = Math.random() * canvas.height;
        }
    }
}