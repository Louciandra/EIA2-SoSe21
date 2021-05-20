namespace l09_1_EddysKonzept {

    let foodStocks: number[] = [];

    let data: string[][] = [
        ["Duck", "Cow", "Pig", "Sheep"],
        ["quack", "moo", "bleat", "yoink"],
        ["quack in german", "muh", "bää", "oink"],
        ["seeds", "wheat", "junk", "food"]
    ];
    
    let animals: Animal[] = [];

    let max: number = 10;

    class Animal {
        name: string;
        sound1: string;
        sound2: string;
        food: string;
        amount: number;
        constructor(_n: string, _s1: string, _s2: string, _f: string, _a: number) {
            this.name = _n;
            this.sound1 = _s1;
            this.sound2 = _s2;
            this.food = _f;
            this.amount = _a;
        }

        sing(): void {
            console.log("...and on his farm he had a " + this.name + "...\nwith a " + this.sound1 + this.sound1 + "... und nem " + this.sound2 + this.sound2 + "\nHere a " + this.sound1 + " da 'n " + this.sound2 + "\nEverywhere a " + this.sound1 + this.sound1 + "...");
        }

        eat(_foodnumber: number): void {

            if (foodStocks[_foodnumber] < this.amount) {
                console.log("not enough food");
                foodStocks[_foodnumber] = 0;
            } else {
                foodStocks[_foodnumber] = foodStocks[_foodnumber] - this.amount;
            }
        }
    }

    for (let i: number = 0; i < data[0].length; i++) {
        let animal: Animal = new Animal(data[0][i], data[1][i], data[2][i], data[3][i], Math.ceil(Math.random() * data[0].length));
        animals.push(animal);
        let amount: number = Math.ceil(Math.random() * max);
        foodStocks.push(amount);
    }
    
    for (let i: number = 0; i < animals.length * 3; i++) {
        let anindex: number = Math.floor(Math.random() * animals.length);
        animals[anindex].sing();
        animals[anindex].eat(anindex);
        console.log(data[3][anindex] + ": " + foodStocks[anindex]);

        console.log("\n----------------------------------\n");
    }
    
}
