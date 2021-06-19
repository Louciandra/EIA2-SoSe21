namespace l11_1 {
    export let canvas: HTMLCanvasElement = document.querySelector("canvas");
    export let context: CanvasRenderingContext2D = canvas.getContext("2d");
    export let wiesenStart: number = canvas.height / 2;
    let sky: Sky = new Sky("lightblue");
    let mountains: Mountain = new Mountain(0, wiesenStart, 5, "lightgrey");
    let grass: Grass = new Grass(canvas.width, canvas.height / 2, wiesenStart, "darkgreen");
    let meadow: Meadow = new Meadow(50, wiesenStart);
    let forest: Forest = new Forest(3);

    let moveArray: Moving[] = [];
    for (let i: number = 0; i < 3; i++) {
        let cl: Cloud = new Cloud();
        moveArray.push(cl);
    }
    for (let i: number = 0; i < 20; i++) {
        let be: Bee = new Bee();
        moveArray.push(be);
    }

    setInterval(updateIMG, 16);
    

    function updateIMG(): void {
        sky.draw();
        mountains.draw();
        grass.draw();
        meadow.draw();
        for (let obj of moveArray) {
            obj.move();
        }
        forest.draw();
    }
}