namespace l11_2 {
    export class Sky {
        dimensions: number[];
        color: string;
        
        constructor(_c: string) {
            this.dimensions = [canvas.width, canvas.height];
            this.color = _c;
        }
        
        draw(): void {
            context.fillStyle = this.color;
            context.fillRect(0, 0, this.dimensions[0], this.dimensions[1]);
        }
    }
}