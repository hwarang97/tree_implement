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

    subtreeFirst() {
        if (this.left) {
            return this.left.subtreeFirst();
        }

        return this;
    }

    subtreeLast() {
        if (this.right) {
            return this.right.subtreeLast();
        }

        return this;
    }

    successor() {
        if (this.right) {
            return this.right.subtreeFirst();
        }

        let current = this;
        let parent = this.parent;
        while (parent && parent.right == current) {
            current = parent;
            parent = parent.parent;
        }
        return parent;
    }

    predecessor() {
        if (this.left) {
            return this.left.subtreeLast();
        }

        let current = this;
        let parent = this.parent;
        while (parent && parent.left == current) {
            current = parent;
            parent = parent.parent;
        }
        return parent;
    }

    subtreeInsertBefore(B) {
        if (this.left) {
            const lastNode = this.left.subtreeLast();
            lastNode.right = B;
            return; 
        }

        this.left = B;
    }
}

export { BinaryNode };
