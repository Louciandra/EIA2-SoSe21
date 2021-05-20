"use strict";
var l09_1_EddysKonzept;
(function (l09_1_EddysKonzept) {
    let foodStocks = [];
    let data = [
        ["Duck", "Cow", "Pig", "Sheep"],
        ["quack", "moo", "bleat", "yoink"],
        ["quack in german", "muh", "bää", "oink"],
        ["seeds", "wheat", "junk", "food"]
    ];
    let animals = [];
    let max = 10;
    class Animal {
        constructor(_n, _s1, _s2, _f, _a) {
            this.name = _n;
            this.sound1 = _s1;
            this.sound2 = _s2;
            this.food = _f;
            this.amount = _a;
        }
        sing() {
            console.log("...and on his farm he had a " + this.name + "...\nwith a " + this.sound1 + this.sound1 + "... und nem " + this.sound2 + this.sound2 + "\nHere a " + this.sound1 + " da 'n " + this.sound2 + "\nEverywhere a " + this.sound1 + this.sound1 + "...");
        }
        eat(_foodnumber) {
            if (foodStocks[_foodnumber] < this.amount) {
                console.log("not enough food");
                foodStocks[_foodnumber] = 0;
            }
            else {
                foodStocks[_foodnumber] = foodStocks[_foodnumber] - this.amount;
            }
        }
    }
    for (let i = 0; i < data[0].length; i++) {
        let animal = new Animal(data[0][i], data[1][i], data[2][i], data[3][i], Math.ceil(Math.random() * data[0].length));
        animals.push(animal);
        let amount = Math.ceil(Math.random() * max);
        foodStocks.push(amount);
    }
    for (let i = 0; i < animals.length * 3; i++) {
        let anindex = Math.floor(Math.random() * animals.length);
        animals[anindex].sing();
        animals[anindex].eat(anindex);
        console.log(data[3][anindex] + ": " + foodStocks[anindex]);
        console.log("\n----------------------------------\n");
    }
})(l09_1_EddysKonzept || (l09_1_EddysKonzept = {}));
//# sourceMappingURL=script.js.map