import { describe, beforeAll, test, expect, beforeAll } from "vitest";
import { BinaryNode } from "./binary_tree";

describe('BinaryNode test', () => {
    let B;
    let C;
    let A;
    
    beforeAll(() => {
        B = new BinaryNode({item: 2});
        C = new BinaryNode({item: 3});
        A = new BinaryNode({left: B, right: C, item: 1});
    });

    test('subtreeFirst test', () => {
        expect(A.subtreeFirst()).toBe(B);
    })
})

