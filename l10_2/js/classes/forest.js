"use strict";
var l10_2;
(function (l10_2) {
    class Forest {
        constructor(_cnt) {
            this.treeArray = [];
            for (let i = 0; i < _cnt; i++) {
                let tr = new l10_2.Tree();
                this.treeArray.push(tr);
            }
        }
        draw() {
            for (let tree of this.treeArray) {
                tree.draw();
            }
        }
    }
    l10_2.Forest = Forest;
})(l10_2 || (l10_2 = {}));
//# sourceMappingURL=forest.js.map