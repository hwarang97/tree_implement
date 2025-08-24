# tree_implement
### Binary Tree Implementation in JavaScript

이 프로젝트는 MIT의 알고리즘 개론 강의 자료를 바탕으로 **이진 트리(Binary Tree)** 자료구조의 핵심 기능들을 JavaScript로 구현한 것입니다.

- **언어**: `JavaScript (ES6+)`
- **테스트**: `Vitest`

---
### ## 구현된 기능 (Features)

#### **1. BinaryNode 클래스**
이진 트리를 구성하는 기본 단위인 `BinaryNode` 클래스를 구현했습니다. 각 노드는 다음 속성을 가집니다.
- `parent`: 부모 노드를 가리키는 포인터
- `left`: 왼쪽 자식 노드를 가리키는 포인터
- `right`: 오른쪽 자식 노드를 가리키는 포인터
- `item`: 노드에 저장되는 데이터

---
#### **2. 순회 및 탐색 (Traversal & Navigation)**

| 기능 | 설명 |
| :--- | :--- |
| **`subtreeIter()`** | 현재 노드를 기준으로 중위 순회(in-order)하며 모든 노드를 순차적으로 반환하는 **제너레이터(Generator)**입니다. |
| **`subtreeFirst()`** | 현재 노드의 하위 트리에서 순회 순서상 **가장 첫 번째** 노드를 반환합니다. |
| **`subtreeLast()`** | 현재 노드의 하위 트리에서 순회 순서상 **가장 마지막** 노드를 반환합니다. |
| **`successor()`** | 전체 트리에서 현재 노드의 **바로 다음** 순서에 오는 노드를 반환합니다. |
| **`predecessor()`** | 전체 트리에서 현재 노드의 **바로 이전** 순서에 오는 노드를 반환합니다. |

---
#### **3. 동적 연산 (Dynamic Operations)**
| 기능 | 설명 |
| :--- | :--- |
| **`subtreeInsertBefore(B)`** | 순회 순서상 현재 노드의 **바로 앞에** 새로운 노드 `B`를 삽입합니다. |
| **`subtreeInsertAfter(B)`** | 순회 순서상 현재 노드의 **바로 뒤에** 새로운 노드 `B`를 삽입합니다. |
| **`subtreeDelete()`** | 트리에서 현재 노드를 **삭제**합니다. 삭제할 노드가 자식을 가질 경우, predecessor 또는 successor와 데이터 교환 후 리프 노드가 된 위치에서 최종적으로 삭제됩니다. |

---
