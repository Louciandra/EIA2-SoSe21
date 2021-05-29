"use strict";
var l09_2;
(function (l09_2) {
    class Forest {
        constructor(_cnt) {
            this.treeArray = [];
            for (let i = 0; i < _cnt; i++) {
                let tr = new l09_2.Tree();
                this.treeArray.push(tr);
            }
        }
        draw() {
            for (let tree of this.treeArray) {
                tree.draw();
            }
        }
    }
    l09_2.Forest = Forest;
})(l09_2 || (l09_2 = {}));
//# sourceMappingURL=forest.js.map