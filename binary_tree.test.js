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
})
