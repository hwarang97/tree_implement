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
            B.parent = lastNode;
            return; 
        }

        this.left = B;
        B.parent = this;
    }

    subtreeInsertAfter(B) {
        if (this.right) {
            const firstNode = this.right.subtreeFirst();
            firstNode.left = B;
            B.parent = firstNode;
            return;
        }

        this.right = B;
        B.parent = this;
    }

    subtreeDelete() {
        if (this.left) {
            const predecessor = this.left.subtreeLast();
            [this.item, predecessor.item] = [predecessor.item, this.item];

            if (predecessor.left || predecessor.right) {
                return predecessor.subtreeDelete();
            }

            predecessor.parent.left = null;
            return predecessor;
        }

        if (this.right) {
            const successor = this.right.subtreeFirst();
            [this.item, successor.item] = [successor.item, this.item];

            if (successor.left || successor.right) {
                return successor.subtreeDelete();
            }

            successor.parent.right = null;
            return successor;
        }

        if (this.parent.left == this) {
            this.parent.left = null;
        } else {
            this.parent.right = null;
        }
        return this
    }
}

export { BinaryNode };
