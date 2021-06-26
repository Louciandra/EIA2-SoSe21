"use strict";
var l11_2;
(function (l11_2) {
    class Forest {
        constructor(_cnt) {
            this.treeArray = [];
            for (let i = 0; i < _cnt; i++) {
                let tr = new l11_2.Tree();
                this.treeArray.push(tr);
            }
        }
        draw() {
            for (let tree of this.treeArray) {
                tree.draw();
            }
        }
    }
    l11_2.Forest = Forest;
})(l11_2 || (l11_2 = {}));
//# sourceMappingURL=forest.js.map