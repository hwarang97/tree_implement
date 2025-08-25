import { describe, test, expect, beforeAll } from 'vitest';
import { BinarySearchNode } from './bst';
import { beforeEach } from 'node:test';

describe('test for BinarySearchNode', () => {
    let a,b,c,d,e,f,g;
    
    beforeAll(() => {
        a = new BinarySearchNode({key: 8});
        b = new BinarySearchNode({parent: a, key: 5});
        c = new BinarySearchNode({parent: a, key: 13});
        d = new BinarySearchNode({parent: b, key: 1});
        e = new BinarySearchNode({parent: b, key: 7});
        f = new BinarySearchNode({parent: c, key: 11});
        g = new BinarySearchNode({parent: c, key: 15});

        a.subtreeInsertBefore(b);
        a.subtreeInsertAfter(c);
        b.subtreeInsertBefore(d);
        b.subtreeInsertAfter(e);
        c.subtreeInsertBefore(f);
        c.subtreeInsertAfter(g);
    });

    test('test for subtreeFind', () => {
        // find existing node
        expect(a.subtreeFind(1).key).toBe(1);
        expect(a.subtreeFind(11).key).toBe(11);

        // find non existing node
        expect(a.subtreeFind(6)).toBe(null);
        expect(a.subtreeFind(12)).toBe(null);
    }); 
})
