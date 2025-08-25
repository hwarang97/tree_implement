import { BinaryNode } from './binary_tree.js'

class BinarySearchNode extends BinaryNode {
    constructor({parent=null, left=null, right=null, item=null, key} = {}) {
        super({parent:parent, left:left, right:right, item:item });
        this.key = key;
    }

    subtreeFind(key) {
        if (key < this.key) {
            if (this.left) {
                return this.left.subtreeFind(key);
            }

        } else if (key > this.key) {
            if (this.right) {
                return this.right.subtreeFind(key);
            }

        } else {
            return this;
        }

        return null;
    }
    
    subtreeFindNext(key) {
        if (key >= this.key) {
            if (this.right) {
                return this.right.subtreeFindNext(key);
            } else {
                return null;
            }

        } else {
            if (this.left) {
                const B = this.left.subtreeFindNext(key);
                if (B) {
                    return B;
                }
            }
            return this;
        }
    }

    subtreeFindPrev(key) {
        if (key <= this.key) {
            if (this.left) {
                return this.left.subtreeFindPrev(key);
            }
            return null;
        } else {
            if (this.right) {
                const B = this.right.subtreeFindPrev(key);
                if (B) {
                    return B;
                }
            }
            return this;
        }
    }

    subtreeInsert(B) {
        if (B.key < this.key) {
            if (this.left) {
                this.left.subtreeInsert(B);
            }
            else {
                this.subtreeInsertBefore(B);
            }
        }

        else if (B.key > this.key) {
            if (this.right) {
                this.right.subtreeInsert(B);
            }
            else {
                this.subtreeInsertAfter(B);
            }
        }

        else {
            this.item = B.item;
        }
    }
}

export { BinarySearchNode };
