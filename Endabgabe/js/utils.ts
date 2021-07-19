namespace abschlussarbeit {
    export function distance(a: number[], b: number[]): number {
        return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
    }

    export function getSpan(pos: number[], t: number[], a: number): number[][] {
        // Distanz zwischen pos und t
        let r: number = distance(pos, t);
        // Winkel zwischen t und der x-Achse
        let tA: number = Math.acos((t[0] - pos[0]) / r);
        // 360° - tA wenn Ziel unter pos
        if (t[1] > pos[1]) {
            tA = 2 * Math.PI - tA;
        }
        // a zu radians
        let angle: number = a * Math.PI / 180;
        // x = cos(t-Winkel + winkel) * r; y = sin(t-Winkel + winkel) * -r 
        let p1: number[] = [Math.cos(tA + angle) * r, Math.sin(tA + angle) * -r];
        let p2: number[] = [Math.cos(tA - angle) * r, Math.sin(tA - angle) * -r];
        return [p1, p2];
    }

    export function getVelVec(pos: number[], t: number[]): number[] {
        let r: number = distance(pos, t);
        if (r == 0) {
            r = 0.01;
        }
        return [(t[0] - pos[0]) / r, (t[1] - pos[1]) / r];
    }

    export function findClickAngle(pos: number[], t: number[]): number {
        let touchVec: number = (t[0] - pos[0]) / distance(pos, t);
        let touchAngle: number = Math.acos(touchVec);
        if (t[1] > pos[1]) {
            touchAngle = Math.PI * 2 - touchAngle;
        }
        return touchAngle;
    }
}