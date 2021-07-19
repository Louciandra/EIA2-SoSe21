"use strict";
var abschlussarbeit;
(function (abschlussarbeit) {
    function distance(a, b) {
        return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
    }
    abschlussarbeit.distance = distance;
    function getSpan(pos, t, a) {
        // Distanz zwischen pos und t
        let r = distance(pos, t);
        // Winkel zwischen t und der x-Achse
        let tA = Math.acos((t[0] - pos[0]) / r);
        // 360° - tA wenn Ziel unter pos
        if (t[1] > pos[1]) {
            tA = 2 * Math.PI - tA;
        }
        // a zu radians
        let angle = a * Math.PI / 180;
        // x = cos(t-Winkel + winkel) * r; y = sin(t-Winkel + winkel) * -r 
        let p1 = [Math.cos(tA + angle) * r, Math.sin(tA + angle) * -r];
        let p2 = [Math.cos(tA - angle) * r, Math.sin(tA - angle) * -r];
        return [p1, p2];
    }
    abschlussarbeit.getSpan = getSpan;
    function getVelVec(pos, t) {
        let r = distance(pos, t);
        if (r == 0) {
            r = 0.01;
        }
        return [(t[0] - pos[0]) / r, (t[1] - pos[1]) / r];
    }
    abschlussarbeit.getVelVec = getVelVec;
    function findClickAngle(pos, t) {
        let touchVec = (t[0] - pos[0]) / distance(pos, t);
        let touchAngle = Math.acos(touchVec);
        if (t[1] > pos[1]) {
            touchAngle = Math.PI * 2 - touchAngle;
        }
        return touchAngle;
    }
    abschlussarbeit.findClickAngle = findClickAngle;
})(abschlussarbeit || (abschlussarbeit = {}));
//# sourceMappingURL=utils.js.map