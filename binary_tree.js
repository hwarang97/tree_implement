class BinaryNode {
    constructor({parent=null, left=null, right=null, item=null} = {}) {
        this.parent = parent;
        this.left = left;
        this.right = right;
        this.item = item;
    }

    *subtreeIter() {
        if (this.left) {
            yield* this.left.subtreeIter();
        }
        yield this;
        if (this.right) {
            yield* this.right.subtreeIter();
        }
    }
}
