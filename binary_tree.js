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
        if (this.left || this.right) {
            let B;
            if (this.left) {
                B = this.left.subtreeLast();   
            } else {
                B = this.right.subtreeFirst();
            }
            [this.item, B.item] = [B.item, this.item];
            return B.subtreeDelete();
        }

        if (this.parent) {
            if (this.parent.left == this) {
                this.parent.left = null;
            } else {
                this.parent.right = null;
            }
        }
        return this;
    }
}

class BinaryTree {
    constructor(nodeType) {
        this.root = null;
        this.size = 0;
        this.nodeType = nodeType;
    }

    __length__() {
        return this.size;
    }

    *__iter__() {
        for (const node of this.root.subtreeIter()) {
            yield node.item;
        }
    }

    build(A) {
        const nodeType = this.nodeType;

        function make_tree(A, i, j) {
            const c = Math.floor((i+j)/2);
            const root = new nodeType({item: A[c]});
    
            if (i < c) {
                root.left = make_tree(A, i, c-1); 
                root.left.parent = root;
            }
    
            if (c < j) {
                root.right = make_tree(A, c+1, j);
                root.right.parent = root;
            }

            return root;
        } 

        const start = 0
        const end = A.length - 1;
        this.root = make_tree(A, start, end);
        this.size = A.length;
    }

    *treeIter() {
        let node = this.root.subtreeFirst();
        while (node) {
            yield node;
            node = node.predecessor();
        }
    }
}

export { BinaryNode, BinaryTree };
