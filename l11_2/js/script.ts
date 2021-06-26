namespace l11_2 {
    export let canvas: HTMLCanvasElement = document.querySelector("canvas");
    export let context: CanvasRenderingContext2D = canvas.getContext("2d");
    export let wiesenStart: number = canvas.height / 2;
    let sky: Sky = new Sky("lightblue");
    let mountains: Mountain = new Mountain(0, wiesenStart, 5, "lightgrey");
    let grass: Grass = new Grass(canvas.width, canvas.height / 2, wiesenStart, "darkgreen");
    export let meadow: Meadow = new Meadow(50, wiesenStart);
    let forest: Forest = new Forest(3);
    export let hive: Hive = new Hive([forest.treeArray[0].position[0] - forest.treeArray[0].dimensions[0], forest.treeArray[0].position[1] - forest.treeArray[0].dimensions[1]]);

    let moveArray: Moving[] = [];
    for (let i: number = 0; i < 3; i++) {
        let cl: Cloud = new Cloud();
        moveArray.push(cl);
    }
    for (let i: number = 0; i < 100; i++) {
        let be: Bee = new Bee();
        moveArray.push(be);
    }

    setInterval(updateIMG, 1);
    

    function updateIMG(): void {
        sky.draw();
        mountains.draw();
        grass.draw();
        meadow.draw();
        forest.draw();
        hive.draw();
        for (let obj of moveArray) {
            obj.move();
        }
        drawHiveNektar();
    }

    function drawHiveNektar(): void {
        let txt: string = "Nektar: " + hive.nektar;
        context.font = "100px Comic Sans MS";
        let gradient: CanvasGradient = context.createLinearGradient(0, 100, context.measureText(txt).width, 100);
        gradient.addColorStop(0, "rgb(255, 0, 0)");
        gradient.addColorStop(0.20202020202020202, "rgb(249, 255, 0)");
        gradient.addColorStop(0.3686868686868687, "rgb(0, 255, 2)");
        gradient.addColorStop(0.5303030303030303, "rgb(0, 245, 255)");
        gradient.addColorStop(0.6717171717171717, "rgb(0, 13, 255)");
        gradient.addColorStop(0.8383838383838383, "rgb(251, 0, 255)");
        gradient.addColorStop(1, "rgb(255, 0, 0)");
        context.fillStyle = gradient;
        context.fillText(txt, 0, 100);
    }

    canvas.addEventListener("click", addNewBee);

    function addNewBee(_event: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        var x: number = _event.clientX - rect.left;
        var y: number = _event.clientY - rect.top;
        let pos: number[] = [x * 2.25, y * 2];
        let biene: Bee = new Bee();
        biene.position = pos;
        moveArray.push(biene);
    }
}