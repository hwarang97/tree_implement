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
        // 왼쪽 자식 노드가 있는 경우
        const E = new BinaryNode({item:5});
        A.subtreeInsertBefore(E);
        expect(B.right).toBe(E);
        expect(E.parent).toBe(B);

        // 왼쪽 자식 노드가 없는 경우
        const D = new BinaryNode({item:4});
        B.subtreeInsertBefore(D);
        expect(B.left).toBe(D);
        expect(D.parent).toBe(B);
    });

    test('subtreeInsertAfter test1', () => {
        // 오른쪽 자식 노드가 있을 경우 
        const F = new BinaryNode({item:6})
        A.subtreeInsertAfter(F);
        expect(C.left).toBe(F);
        expect(F.parent).toBe(C);

        // 오른쪽 자식 노드가 없을 경우
        const G = new BinaryNode({item:7});
        C.subtreeInsertAfter(G);
        expect(C.right).toBe(G);
        expect(G.parent).toBe(C);
    });

    test('subtreeDelete test1', () => {
        // 노드 A 삭제시, 전임자와 아이템을 바꾸고 연결이 끊기는지 확인
        expect(A.subtreeDelete().item).toBe(1);
        expect(A.left).toBe(null);
        expect(A.item).toBe(2);
    });

    test('subtreeDelete test2', () => {
        // 노드 A 삭제시, 전임자와 아이템을 바꾸고 연결이 끊기는지 확인
        const D = new BinaryNode({item:4, parent: B});
        B.left = D;

        expect(A.subtreeDelete().item).toBe(1);
        expect(B.left).toBe(null);
        expect(A.item).toBe(2);
        expect(B.item).toBe(4);
    });

    test('subtreeDelete test3', () => {
        // 노드 C 삭제시, 후임자와 아이템을 바꾸고 연결이 끊기는지 확인
        const G = new BinaryNode({item:7, parent: C});
        C.right = G;

        expect(C.subtreeDelete().item).toBe(3);
        expect(C.right).toBe(null);
    });

    test('subtreeDelete test4', () => {
        // 노드 C 삭제시, 후임자와 아이템을 바꾸고 연결이 끊기는지 확인
        const G = new BinaryNode({item:7, parent: C});
        C.right = G;

        const H = new BinaryNode({item:13, parent: G});
        G.right = H;

        expect(C.subtreeDelete().item).toBe(3);
        expect(C.item).toBe(7);
        expect(G.item).toBe(13);
        expect(G.right).toBe(null);
    });

    test('subtreeDelete test5', () => {
        // 노드 B 삭제시, 전임자와 아이템을 바꾸고 연결이 끊기는지 확인
        expect(B.subtreeDelete().item).toBe(2);
        expect(A.left).toBe(null);
    });
})
