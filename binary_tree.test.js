import { describe, beforeEach, test, expect, beforeAll } from "vitest";
import { BinaryNode } from "./binary_tree";

describe('BinaryNode test', () => {
    let B;
    let C;
    let A;
    
    beforeEach(() => {
        B = new BinaryNode({item: 2});
        C = new BinaryNode({item: 3});
        A = new BinaryNode({left: B, right: C, item: 1});
        
        B.parent = A;
        C.parent = A;
    });

    test('subtreeFirst test', () => {
        expect(A.subtreeFirst()).toBe(B);
    });

    test('subtreeLast test', () => {
        expect(A.subtreeLast()).toBe(C);
    });

    test('successor test', () => {
        expect(B.successor()).toBe(A);
    });

    test('predecessor test', () => {
        expect(C.predecessor()).toBe(A);
    });

    test('subtreeInsertBefore test', () => {
        const D = new BinaryNode({item:4, parent: B})
        A.subtreeInsertBefore(D);
        expect(A.predecessor()).toBe(D);
    });

    test('subtreeInsertAfter test', () => {
        // 오른쪽 자식 노드가 있을 경우 
        const F = new BinaryNode({item:6, parent: C})
        A.subtreeInsertAfter(F);
        expect(C.left).toBe(F);

        // 오른쪽 자식 노드가 없을 경우
        const G = new BinaryNode({item:7, parent: C});
        C.subtreeInsertAfter(G);
        expect(C.right).toBe(G);
    });
})
