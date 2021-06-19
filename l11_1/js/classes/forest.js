"use strict";
var l11_1;
(function (l11_1) {
    class Forest {
        constructor(_cnt) {
            this.treeArray = [];
            for (let i = 0; i < _cnt; i++) {
                let tr = new l11_1.Tree();
                this.treeArray.push(tr);
            }
        }
        draw() {
            for (let tree of this.treeArray) {
                tree.draw();
            }
        }
    }
    l11_1.Forest = Forest;
})(l11_1 || (l11_1 = {}));
//# sourceMappingURL=forest.js.map