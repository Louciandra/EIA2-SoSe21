namespace abschlussarbeit {
    export let spielwiese: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("spielwiese");
    export let ctx: CanvasRenderingContext2D = spielwiese.getContext("2d");
    let optionCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("rangecanvas");
    let optCtx: CanvasRenderingContext2D = optionCanvas.getContext("2d");

    let team1AuswDiv: HTMLDivElement = document.createElement("div"); 
    let team2AuswDiv: HTMLDivElement = document.createElement("div"); 

    export let ball: Ball = new Ball(7.5, 5, 20);
    export let score: number[] = [0, 0];

    let spielerWerte: HTMLDivElement = <HTMLDivElement>document.getElementById("spielerInfo");
    //let spielerAusw: HTMLDivElement = <HTMLDivElement>document.getElementById("spieler");

    export let col1: string = "#f00";
    export let col2: string = "#0f0";
    export let speedMin: number = 1;
    export let speedMax: number = 3;
    export let uncMin: number = 5;
    export let uncMax: number = 15;

    let optForm: HTMLFormElement = <HTMLFormElement>document.getElementById("pregameOptionsForm");
    let ausArr: SpielerCont[] = [];

    let optCan: number; 

    let humanArr: Human[] = [];

    let anyTouching: boolean = false;
    let touchingP: Human;
    let selectedPind: number;
    
    let scoreP: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("scoreP");

    export let teamOnePos: number[][] = [[1770, 150], [1770, 350], [1770, 1010], [1770, 1210], [1900, 680], [1350, 680], [800, 150], [700, 350], [700, 1010], [800, 1210], [600, 680]];
    export let teamTwoPos: number[][] = [[320, 150], [320, 350], [320, 1010], [320, 1210], [200, 680], [750, 680], [1300, 150], [1400, 350], [1400, 1010], [1300, 1210], [1500, 680]];

    window.addEventListener("load", handleLoad);
    document.getElementById("startGame").addEventListener("click", startNewGame);

    function handleLoad(): void {
        drawOptCanvas();
    }

    function drawOptCanvas(): void {
        optCan = setInterval(updateOptCan, 30);
    }

    function updateOptCan(): void {
        optCtx.globalAlpha = 1;
        optCtx.clearRect(0, 0, optionCanvas.width, optionCanvas.height);

        optCtx.fillStyle = "white";
        optCtx.fillRect(0, 0, optionCanvas.width, optionCanvas.height);
        optCtx.strokeStyle = "black";
        optCtx.lineWidth = 5;
        optCtx.strokeRect(25, 25, optionCanvas.width - 50, optionCanvas.height - 50);
        optCtx.lineWidth = 2;
        optCtx.beginPath();
        optCtx.moveTo(optionCanvas.width / 2, 25);
        optCtx.lineTo(optionCanvas.width / 2, optionCanvas.height - 25);
        optCtx.moveTo(25, optionCanvas.height / 2);
        optCtx.lineTo(optionCanvas.width - 25, optionCanvas.height / 2);
        optCtx.stroke();
        optCtx.closePath();

        optCtx.font = "20px sans-serif";
        optCtx.textAlign = "center";
        optCtx.fillStyle = "black";
        optCtx.fillText("sehr langsam", optionCanvas.width / 2, 15);
        optCtx.fillText("sehr schnell", optionCanvas.width / 2, optionCanvas.height - 5);

        // die nächsten beiden for-Loops basieren auf https://stackoverflow.com/questions/5026961/html5-canvas-ctx-filltext-wont-do-line-breaks
        let textArr: string[] = "sehr genau".split("");
        let y: number = 80;
        for (let char of textArr) {
            optCtx.fillText(char, 10, y);
            y += 18;
        }

        textArr = "sehr ungenau".split("");
        y = 60;
        for (let char of textArr) {
            optCtx.fillText(char, optionCanvas.width - 10, y);
            y += 18;
        }

        let optFormD: FormData = new FormData(optForm);

        let speedStep: number = 250 / 4;
        let speedMinRange: number = +optFormD.get("speedMinRange");
        let speedMaxRange: number = +optFormD.get("speedMaxRange");

        let uncStep: number = 250 / 14;
        let uncMinRange: number = +optFormD.get("uncMinRange");
        let uncMaxRange: number = +optFormD.get("uncMaxRange");

        let speedY1: number = (speedMinRange - 1) * speedStep + 25;
        let speedY2: number = (speedMaxRange - 1) * speedStep + 25;

        let uncX1: number = (uncMinRange - 1) * uncStep + 25;
        let uncX2: number = (uncMaxRange - 1) * uncStep + 25;

        optCtx.fillStyle = "red";
        optCtx.globalAlpha = 0.3;
        optCtx.fillRect(uncX1, speedY1, (uncX2 - uncX1), (speedY2 - speedY1));
        optCtx.globalAlpha = 1;
        optCtx.strokeStyle = "red";
        optCtx.strokeRect(uncX1, speedY1, (uncX2 - uncX1), (speedY2 - speedY1));
    }

    function startNewGame(): void {
        let optFormD: FormData = new FormData(optForm);
        clearInterval(optCan);
        let gamearea: HTMLDivElement = <HTMLDivElement>document.getElementById("gamearea");
        gamearea.style.display = "grid";
        document.getElementById("pregame").style.display = "none";

        let speedMinRange: number = +optFormD.get("speedMinRange");
        let speedMaxRange: number = +optFormD.get("speedMaxRange");
        let uncMinRange: number = +optFormD.get("uncMinRange");
        let uncMaxRange: number = +optFormD.get("uncMaxRange");

        uncMin = Math.min(uncMinRange, uncMaxRange);
        uncMax = Math.max(uncMinRange, uncMaxRange);

        speedMin = Math.min(speedMinRange, speedMaxRange);
        speedMax = Math.max(speedMinRange, speedMaxRange);

        col1 = "" + optFormD.get("team1Col");
        col2 = "" + optFormD.get("team2Col");

        for (let i: number = 0; i < 11; i++) {
            let zwPos: number[] = [];
            zwPos.push(teamOnePos[i][0]);
            zwPos.push(teamOnePos[i][1]);
            let p: Player = new Player(zwPos, 40, true, i);
            humanArr.push(p);
        }
        for (let i: number = 0; i < 11; i++) {
            let zwPos: number[] = [];
            zwPos.push(teamTwoPos[i][0]);
            zwPos.push(teamTwoPos[i][1]);
            let p: Player = new Player(zwPos, 40, false, i);
            humanArr.push(p);
        }

        let ref: Referee = new Referee([spielwiese.width / 2, 200], false);
        humanArr.push(ref);

        for (let i: number = 0; i < 2; i++) {
            let line: Referee = new Referee([spielwiese.width / 2, 50 + (i * (spielwiese.height - 75))], true);
            humanArr.push(line);
        }

        for (let i: number = 0; i < 3; i++) {
            let ausw: Player = new Player([-100, -100], 40, true, 11 + i);
            ausw.onField = false;
            humanArr.push(ausw);
        }

        for (let i: number = 0; i < 3; i++) {
            let ausw: Player = new Player([-100, -100], 40, false, 11 + i);
            ausw.onField = false;
            humanArr.push(ausw);
        }

        fillReplacements();
        window.addEventListener("click", klickMouse);
        setInterval(updateGame, 16);
    }

    function updateGame(): void {
        ctx.clearRect(0, 0, spielwiese.width, spielwiese.height);
        anyTouching = false;
        for (let i: number = 0; i < humanArr.length; i++) {
            let t: boolean = humanArr[i].checkForTouch(ball);
            if (t) {
                anyTouching = true;
                touchingP = humanArr[i];
                break;
            }
        }
        for (let obj of humanArr) {
            if (obj.onField || obj.referee) {
                obj.update(ball, anyTouching, touchingP);
            }
        }
        ball.update(anyTouching);
        scoreP.innerText = `LFT ${score[0]} - ${score[1]} RGT`;
    }

    function klickMouse(_e: MouseEvent): void {
        // Der Code um x und y zu finden kommt teilweise durch https://stackoverflow.com/questions/46528123/how-to-get-bounding-box-coordinates-for-canvas-content
        let rect: DOMRect = spielwiese.getBoundingClientRect();
        let conv: number = 2100 / rect.width;
        var x: number = (_e.pageX - rect.left) * conv;
        var y: number = (_e.pageY - rect.top) * conv;
        let target: number[] = [x, y];
        if (x < spielwiese.width + rect.left && x > 0 && y > 0 && y < spielwiese.height + rect.top) {
            ball.kick(target, anyTouching, touchingP);

            let clickedPlayer: boolean = false;
            for (let i: number = 0; i < humanArr.length; i++) {
                if (distance(target, humanArr[i].pos) < humanArr[i].radius && !humanArr[i].referee) {
                    selectedPind = i;
                    document.getElementById("werte").style.display = "block";
                    document.getElementById("spieler").style.display = "block";
                    document.getElementById("spielerNummerSpan").innerText = "" + humanArr[i].trickNr;
                    document.getElementById("spielerSprintSpan").innerText = "" + Math.round((humanArr[i].speed * 2) * 10) / 10;
                    document.getElementById("spielerUncSpan").innerText = "" + Math.round(humanArr[i].ungenauigkeit);
                    spielerWerte.style.backgroundColor = humanArr[i].color;
                    if (humanArr[i].team1) {
                        team1AuswDiv.style.display = "block";
                        team2AuswDiv.style.display = "none";
                    } else {
                        team2AuswDiv.style.display = "block";
                        team1AuswDiv.style.display = "none";
                    }
                    clickedPlayer = true;
                }
            }

            if (!clickedPlayer) {
                document.getElementById("werte").style.display = "none";
                document.getElementById("spieler").style.display = "none";
                team1AuswDiv.style.display = "none";
                team2AuswDiv.style.display = "none";
            }
        }
    }

    
    export function resetPlayers(): void {
        let zw1: number[] = [];
        let zw2: number[] = [];
        for (let i: number = 0; i < humanArr.length; i++) {
            if (humanArr[i].onField) {
                if (humanArr[i].team1) {
                    zw1.push(i);
                } else {
                    zw2.push(i);
                }
            }
        }

        for (let i: number = 0; i < zw1.length; i++) {
            let zwPos: number[] = [];
            zwPos.push(teamOnePos[i][0]);
            zwPos.push(teamOnePos[i][1]);
            humanArr[zw1[i]].pos = zwPos;
        }

        for (let i: number = 0; i < zw2.length; i++) {
            let zwPos: number[] = [];
            zwPos.push(teamTwoPos[i][0]);
            zwPos.push(teamTwoPos[i][1]);
            humanArr[zw2[i]].pos = zwPos;
        }
    }

    function fillReplacements(): void {
        let spielerDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("spieler");
        for (let obj of humanArr) {
            if (!obj.onField && !obj.referee) {
                let plDiv: HTMLDivElement = document.createElement("div");
                let auswNr: HTMLParagraphElement = document.createElement("p");
                auswNr.innerText = "Trickot-Nummer: " + obj.trickNr;
                plDiv.appendChild(auswNr);
                let auswSprint: HTMLParagraphElement = document.createElement("p");
                auswSprint.innerText = "Sprint-Geschwindigkeit: " + Math.round((obj.speed * 2) * 10) / 10 + "m/s";
                plDiv.appendChild(auswSprint);
                let auswUnc: HTMLParagraphElement = document.createElement("p");
                auswUnc.innerText = "Ungenauigkeit: " + Math.round(obj.ungenauigkeit) + "°";
                plDiv.appendChild(auswUnc);
                plDiv.classList.add("plDiv");
                plDiv.style.backgroundColor = obj.color;
                ausArr.push({player: obj, div: plDiv});
                plDiv.addEventListener("click", swapPlayers);
                if (obj.team1) {
                    team1AuswDiv.appendChild(plDiv);
                } else {
                    team2AuswDiv.appendChild(plDiv);
                }
            }
        }
        team1AuswDiv.style.display = "none";
        team2AuswDiv.style.display = "none";
        spielerDiv.appendChild(team1AuswDiv);
        spielerDiv.appendChild(team2AuswDiv);
    }

    function swapPlayers(_ev: MouseEvent): void {
        let t: HTMLDivElement = <HTMLDivElement>_ev.currentTarget;
        let newP: Human;
        let index: number;
        let newIndex: number;
        for (index = 0; index < ausArr.length; index++) {
            if (ausArr[index].div == t) {
                newP = ausArr[index].player;
                break;
            }
        }

        for (newIndex = 0; newIndex < humanArr.length; newIndex++) {
            if (humanArr[newIndex] == newP) {
                break;
            }
        }

        newP.onField = true;
        humanArr[selectedPind].onField = false;
        let pos: number[] = [];
        pos.push(humanArr[selectedPind].pos[0]);
        pos.push(humanArr[selectedPind].pos[1]);
        newP.pos = pos;

        let home: number[] = [];
        home.push(humanArr[selectedPind].home[0]);
        home.push(humanArr[selectedPind].home[1]);
        newP.home = home;

        humanArr[selectedPind].onField = false;
        humanArr[selectedPind].pos = [-100, -100];
        humanArr[selectedPind].home = undefined;
        ausArr[index].player = humanArr[selectedPind];

        selectedPind = newIndex;
        updateInformations(newIndex);
    }

    function updateInformations(newIndex: number): void {
        team1AuswDiv.innerHTML = "";
        team2AuswDiv.innerHTML = "";
        ausArr = [];
        for (let obj of humanArr) {
            if (!obj.onField && !obj.referee) {
                let plDiv: HTMLDivElement = document.createElement("div");
                let auswNr: HTMLParagraphElement = document.createElement("p");
                auswNr.innerText = "Trickot-Nummer: " + obj.trickNr;
                plDiv.appendChild(auswNr);
                let auswSprint: HTMLParagraphElement = document.createElement("p");
                auswSprint.innerText = "Sprint-Geschwindigkeit: " + Math.round((obj.speed * 2) * 10) / 10 + "m/s";
                plDiv.appendChild(auswSprint);
                let auswUnc: HTMLParagraphElement = document.createElement("p");
                auswUnc.innerText = "Ungenauigkeit: " + Math.round(obj.ungenauigkeit) + "°";
                plDiv.appendChild(auswUnc);
                plDiv.classList.add("plDiv");
                plDiv.style.backgroundColor = obj.color;
                ausArr.push({player: obj, div: plDiv});
                plDiv.addEventListener("click", swapPlayers);
                if (obj.team1) {
                    team1AuswDiv.appendChild(plDiv);
                } else {
                    team2AuswDiv.appendChild(plDiv);
                }
            }
        }

        document.getElementById("spielerNummerSpan").innerText = "" + humanArr[newIndex].trickNr;
        document.getElementById("spielerSprintSpan").innerText = "" + Math.round((humanArr[newIndex].speed * 2) * 10) / 10;
        document.getElementById("spielerUncSpan").innerText = "" + Math.round(humanArr[newIndex].ungenauigkeit);
    }

    interface SpielerCont {
        player: Human;
        div: HTMLDivElement;
    }
}