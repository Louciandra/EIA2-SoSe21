"use strict";
var abschlussarbeit;
(function (abschlussarbeit) {
    abschlussarbeit.spielwiese = document.getElementById("spielwiese");
    abschlussarbeit.ctx = abschlussarbeit.spielwiese.getContext("2d");
    let optionCanvas = document.getElementById("rangecanvas");
    let optCtx = optionCanvas.getContext("2d");
    let team1AuswDiv = document.createElement("div");
    let team2AuswDiv = document.createElement("div");
    abschlussarbeit.ball = new abschlussarbeit.Ball(7.5, 5, 20);
    abschlussarbeit.score = [0, 0];
    let spielerWerte = document.getElementById("spielerInfo");
    //let spielerAusw: HTMLDivElement = <HTMLDivElement>document.getElementById("spieler");
    abschlussarbeit.col1 = "#f00";
    abschlussarbeit.col2 = "#0f0";
    abschlussarbeit.speedMin = 1;
    abschlussarbeit.speedMax = 3;
    abschlussarbeit.uncMin = 5;
    abschlussarbeit.uncMax = 15;
    let optForm = document.getElementById("pregameOptionsForm");
    let ausArr = [];
    let optCan;
    let humanArr = [];
    let anyTouching = false;
    let touchingP;
    let selectedPind;
    let scoreP = document.getElementById("scoreP");
    abschlussarbeit.teamOnePos = [[1770, 150], [1770, 350], [1770, 1010], [1770, 1210], [1900, 680], [1350, 680], [800, 150], [700, 350], [700, 1010], [800, 1210], [600, 680]];
    abschlussarbeit.teamTwoPos = [[320, 150], [320, 350], [320, 1010], [320, 1210], [200, 680], [750, 680], [1300, 150], [1400, 350], [1400, 1010], [1300, 1210], [1500, 680]];
    window.addEventListener("load", handleLoad);
    document.getElementById("startGame").addEventListener("click", startNewGame);
    function handleLoad() {
        drawOptCanvas();
    }
    function drawOptCanvas() {
        optCan = setInterval(updateOptCan, 30);
    }
    function updateOptCan() {
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
        let textArr = "sehr genau".split("");
        let y = 80;
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
        let optFormD = new FormData(optForm);
        let speedStep = 250 / 4;
        let speedMinRange = +optFormD.get("speedMinRange");
        let speedMaxRange = +optFormD.get("speedMaxRange");
        let uncStep = 250 / 14;
        let uncMinRange = +optFormD.get("uncMinRange");
        let uncMaxRange = +optFormD.get("uncMaxRange");
        let speedY1 = (speedMinRange - 1) * speedStep + 25;
        let speedY2 = (speedMaxRange - 1) * speedStep + 25;
        let uncX1 = (uncMinRange - 1) * uncStep + 25;
        let uncX2 = (uncMaxRange - 1) * uncStep + 25;
        optCtx.fillStyle = "red";
        optCtx.globalAlpha = 0.3;
        optCtx.fillRect(uncX1, speedY1, (uncX2 - uncX1), (speedY2 - speedY1));
        optCtx.globalAlpha = 1;
        optCtx.strokeStyle = "red";
        optCtx.strokeRect(uncX1, speedY1, (uncX2 - uncX1), (speedY2 - speedY1));
    }
    function startNewGame() {
        let optFormD = new FormData(optForm);
        clearInterval(optCan);
        let gamearea = document.getElementById("gamearea");
        gamearea.style.display = "grid";
        document.getElementById("pregame").style.display = "none";
        let speedMinRange = +optFormD.get("speedMinRange");
        let speedMaxRange = +optFormD.get("speedMaxRange");
        let uncMinRange = +optFormD.get("uncMinRange");
        let uncMaxRange = +optFormD.get("uncMaxRange");
        abschlussarbeit.uncMin = Math.min(uncMinRange, uncMaxRange);
        abschlussarbeit.uncMax = Math.max(uncMinRange, uncMaxRange);
        abschlussarbeit.speedMin = Math.min(speedMinRange, speedMaxRange);
        abschlussarbeit.speedMax = Math.max(speedMinRange, speedMaxRange);
        abschlussarbeit.col1 = "" + optFormD.get("team1Col");
        abschlussarbeit.col2 = "" + optFormD.get("team2Col");
        for (let i = 0; i < 11; i++) {
            let zwPos = [];
            zwPos.push(abschlussarbeit.teamOnePos[i][0]);
            zwPos.push(abschlussarbeit.teamOnePos[i][1]);
            let p = new abschlussarbeit.Player(zwPos, 40, true, i);
            humanArr.push(p);
        }
        for (let i = 0; i < 11; i++) {
            let zwPos = [];
            zwPos.push(abschlussarbeit.teamTwoPos[i][0]);
            zwPos.push(abschlussarbeit.teamTwoPos[i][1]);
            let p = new abschlussarbeit.Player(zwPos, 40, false, i);
            humanArr.push(p);
        }
        let ref = new abschlussarbeit.Referee([abschlussarbeit.spielwiese.width / 2, 200], false);
        humanArr.push(ref);
        for (let i = 0; i < 2; i++) {
            let line = new abschlussarbeit.Referee([abschlussarbeit.spielwiese.width / 2, 50 + (i * (abschlussarbeit.spielwiese.height - 75))], true);
            humanArr.push(line);
        }
        for (let i = 0; i < 3; i++) {
            let ausw = new abschlussarbeit.Player([-100, -100], 40, true, 11 + i);
            ausw.onField = false;
            humanArr.push(ausw);
        }
        for (let i = 0; i < 3; i++) {
            let ausw = new abschlussarbeit.Player([-100, -100], 40, false, 11 + i);
            ausw.onField = false;
            humanArr.push(ausw);
        }
        fillReplacements();
        window.addEventListener("click", klickMouse);
        setInterval(updateGame, 16);
    }
    function updateGame() {
        abschlussarbeit.ctx.clearRect(0, 0, abschlussarbeit.spielwiese.width, abschlussarbeit.spielwiese.height);
        anyTouching = false;
        for (let i = 0; i < humanArr.length; i++) {
            let t = humanArr[i].checkForTouch(abschlussarbeit.ball);
            if (t) {
                anyTouching = true;
                touchingP = humanArr[i];
                break;
            }
        }
        for (let obj of humanArr) {
            if (obj.onField || obj.referee) {
                obj.update(abschlussarbeit.ball, anyTouching, touchingP);
            }
        }
        abschlussarbeit.ball.update(anyTouching);
        scoreP.innerText = `LFT ${abschlussarbeit.score[0]} - ${abschlussarbeit.score[1]} RGT`;
    }
    function klickMouse(_e) {
        let rect = abschlussarbeit.spielwiese.getBoundingClientRect();
        let conv = 2100 / rect.width;
        var x = (_e.pageX - rect.left) * conv;
        var y = (_e.pageY - rect.top) * conv;
        let target = [x, y];
        if (x < abschlussarbeit.spielwiese.width + rect.left && x > 0 && y > 0 && y < abschlussarbeit.spielwiese.height + rect.top) {
            abschlussarbeit.ball.kick(target, anyTouching, touchingP);
            let clickedPlayer = false;
            for (let i = 0; i < humanArr.length; i++) {
                if (abschlussarbeit.distance(target, humanArr[i].pos) < humanArr[i].radius && !humanArr[i].referee) {
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
                    }
                    else {
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
    function resetPlayers() {
        let zw1 = [];
        let zw2 = [];
        for (let i = 0; i < humanArr.length; i++) {
            if (humanArr[i].onField) {
                if (humanArr[i].team1) {
                    zw1.push(i);
                }
                else {
                    zw2.push(i);
                }
            }
        }
        for (let i = 0; i < zw1.length; i++) {
            let zwPos = [];
            zwPos.push(abschlussarbeit.teamOnePos[i][0]);
            zwPos.push(abschlussarbeit.teamOnePos[i][1]);
            humanArr[zw1[i]].pos = zwPos;
        }
        for (let i = 0; i < zw2.length; i++) {
            let zwPos = [];
            zwPos.push(abschlussarbeit.teamTwoPos[i][0]);
            zwPos.push(abschlussarbeit.teamTwoPos[i][1]);
            humanArr[zw2[i]].pos = zwPos;
        }
    }
    abschlussarbeit.resetPlayers = resetPlayers;
    function fillReplacements() {
        let spielerDiv = document.getElementById("spieler");
        for (let obj of humanArr) {
            if (!obj.onField && !obj.referee) {
                let plDiv = document.createElement("div");
                let auswNr = document.createElement("p");
                auswNr.innerText = "Trickot-Nummer: " + obj.trickNr;
                plDiv.appendChild(auswNr);
                let auswSprint = document.createElement("p");
                auswSprint.innerText = "Sprint-Geschwindigkeit: " + Math.round((obj.speed * 2) * 10) / 10 + "m/s";
                plDiv.appendChild(auswSprint);
                let auswUnc = document.createElement("p");
                auswUnc.innerText = "Ungenauigkeit: " + Math.round(obj.ungenauigkeit) + "°";
                plDiv.appendChild(auswUnc);
                plDiv.classList.add("plDiv");
                plDiv.style.backgroundColor = obj.color;
                ausArr.push({ player: obj, div: plDiv });
                plDiv.addEventListener("click", swapPlayers);
                if (obj.team1) {
                    team1AuswDiv.appendChild(plDiv);
                }
                else {
                    team2AuswDiv.appendChild(plDiv);
                }
            }
        }
        team1AuswDiv.style.display = "none";
        team2AuswDiv.style.display = "none";
        spielerDiv.appendChild(team1AuswDiv);
        spielerDiv.appendChild(team2AuswDiv);
    }
    function swapPlayers(_ev) {
        let t = _ev.currentTarget;
        let newP;
        let index;
        let newIndex;
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
        let pos = [];
        pos.push(humanArr[selectedPind].pos[0]);
        pos.push(humanArr[selectedPind].pos[1]);
        newP.pos = pos;
        let home = [];
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
    function updateInformations(newIndex) {
        team1AuswDiv.innerHTML = "";
        team2AuswDiv.innerHTML = "";
        ausArr = [];
        for (let obj of humanArr) {
            if (!obj.onField && !obj.referee) {
                let plDiv = document.createElement("div");
                let auswNr = document.createElement("p");
                auswNr.innerText = "Trickot-Nummer: " + obj.trickNr;
                plDiv.appendChild(auswNr);
                let auswSprint = document.createElement("p");
                auswSprint.innerText = "Sprint-Geschwindigkeit: " + Math.round((obj.speed * 2) * 10) / 10 + "m/s";
                plDiv.appendChild(auswSprint);
                let auswUnc = document.createElement("p");
                auswUnc.innerText = "Ungenauigkeit: " + Math.round(obj.ungenauigkeit) + "°";
                plDiv.appendChild(auswUnc);
                plDiv.classList.add("plDiv");
                plDiv.style.backgroundColor = obj.color;
                ausArr.push({ player: obj, div: plDiv });
                plDiv.addEventListener("click", swapPlayers);
                if (obj.team1) {
                    team1AuswDiv.appendChild(plDiv);
                }
                else {
                    team2AuswDiv.appendChild(plDiv);
                }
            }
        }
        document.getElementById("spielerNummerSpan").innerText = "" + humanArr[newIndex].trickNr;
        document.getElementById("spielerSprintSpan").innerText = "" + Math.round((humanArr[newIndex].speed * 2) * 10) / 10;
        document.getElementById("spielerUncSpan").innerText = "" + Math.round(humanArr[newIndex].ungenauigkeit);
    }
})(abschlussarbeit || (abschlussarbeit = {}));
//# sourceMappingURL=script.js.map