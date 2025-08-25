import { describe, test, expect, beforeEach } from 'vitest';
import { BinarySearchNode } from './bst';

describe('test for BinarySearchNode', () => {
    let a,b,c,d,e,f,g;
    
    beforeEach(() => {
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

    test('test fo subtreeFindNext', () => {
        // 사이드쪽 확인
        expect(a.subtreeFindNext(0).key).toBe(1);
        expect(a.subtreeFindNext(16)).toBe(null);

        // 깊이 1인것 확인
        expect(a.subtreeFindNext(3).key).toBe(5);
        expect(a.subtreeFindNext(12).key).toBe(13);
        
        // 깊이 2중에서 내부쪽에 있는것 확인
        expect(a.subtreeFindNext(6).key).toBe(7);
        expect(a.subtreeFindNext(10).key).toBe(11);
    });

    test('test fo subtreeFindPrev', () => {
        // 사이드쪽 확인
        expect(a.subtreeFindPrev(0)).toBe(null);
        expect(a.subtreeFindPrev(16).key).toBe(15);

        // 깊이 1인것 확인
        expect(a.subtreeFindPrev(6).key).toBe(5);
        expect(a.subtreeFindPrev(14).key).toBe(13);
        
        // 깊이 2중에서 내부쪽에 있는것 확인
        expect(a.subtreeFindPrev(8).key).toBe(7);
        expect(a.subtreeFindPrev(12).key).toBe(11);
    });
})
