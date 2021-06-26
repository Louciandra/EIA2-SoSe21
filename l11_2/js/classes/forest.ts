namespace l11_2 {
    export class Forest {
        treeArray: Tree[] = [];

        constructor(_cnt: number) {
            for (let i: number = 0; i < _cnt; i++) {
                let tr: Tree = new Tree();
                this.treeArray.push(tr);
            }
        }

        draw(): void {
            for (let tree of this.treeArray) {
                tree.draw();
            }
        }
    }
}