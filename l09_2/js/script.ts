namespace l09_2 {
    export let canvas: HTMLCanvasElement = document.querySelector("canvas");
    export let context: CanvasRenderingContext2D = canvas.getContext("2d");
    let wiesenStart: number = canvas.height / 2;
    let sky: Sky = new Sky("lightblue");
    let mountains: Mountain = new Mountain(0, wiesenStart, 5, "lightgrey");
    let grass: Grass = new Grass(canvas.width, canvas.height / 2, wiesenStart, "darkgreen");
    let meadow: Meadow = new Meadow(50, wiesenStart);
    let tropo: Troposphere = new Troposphere(3, wiesenStart / 2, [canvas.width / 8, canvas.height / 12]);
    let forest: Forest = new Forest(3);
    let beeHive: Hive = new Hive(20);

    setInterval(updateIMG, 16);
    

    function updateIMG(): void {
        sky.draw();
        mountains.draw();
        grass.draw();
        meadow.draw();
        tropo.update();
        beeHive.update();
        forest.draw();
    }
}