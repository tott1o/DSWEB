
# **DATA STRUCTURES – LAB PROGRAMS (TREES, GRAPHS, SORTING & SEARCHING)**

---

## **14. Program to perform operations on a Binary Search Tree**

### **Operations:**

a. Insert
b. Delete
c. Search
d. Display

---

### **Algorithm**

**Step 1:** Start the program.
**Step 2:** Define a structure for a tree node with `data`, `left`, and `right` pointers.
**Step 3:**
For **Insertion**:

1. If tree is empty, create a new node as root.
2. If `item < root->data`, go to left subtree.
3. If `item > root->data`, go to right subtree.
4. Repeat until correct position found.

For **Search**:

1. Start from root.
2. If `item == root->data`, print found.
3. If `item < root->data`, move left.
4. Else move right.

For **Deletion**:

1. If node is leaf → delete directly.
2. If node has one child → replace node with child.
3. If node has two children → replace with inorder successor, delete successor.

For **Display**:

* Traverse the tree using **Inorder traversal**.

**Step 4:** Stop.

---

### **Program**

```c
#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *left, *right;
};
struct node *root = NULL;

struct node* createNode(int data) {
    struct node* newNode = malloc(sizeof(struct node));
    newNode->data = data;
    newNode->left = newNode->right = NULL;
    return newNode;
}

struct node* insert(struct node* root, int data) {
    if (root == NULL) return createNode(data);
    if (data < root->data)
        root->left = insert(root->left, data);
    else if (data > root->data)
        root->right = insert(root->right, data);
    return root;
}

struct node* minValueNode(struct node* node) {
    struct node* current = node;
    while (current && current->left != NULL)
        current = current->left;
    return current;
}

struct node* deleteNode(struct node* root, int key) {
    if (root == NULL) return root;
    if (key < root->data)
        root->left = deleteNode(root->left, key);
    else if (key > root->data)
        root->right = deleteNode(root->right, key);
    else {
        if (root->left == NULL) {
            struct node* temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            struct node* temp = root->left;
            free(root);
            return temp;
        }
        struct node* temp = minValueNode(root->right);
        root->data = temp->data;
        root->right = deleteNode(root->right, temp->data);
    }
    return root;
}

void inorder(struct node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

void search(struct node* root, int key) {
    if (root == NULL) {
        printf("Element not found\n");
        return;
    }
    if (key == root->data)
        printf("Element found!\n");
    else if (key < root->data)
        search(root->left, key);
    else
        search(root->right, key);
}

int main() {
    int ch, item;
    while (1) {
        printf("\n1.Insert 2.Delete 3.Search 4.Display 5.Exit\n");
        scanf("%d", &ch);
        switch (ch) {
            case 1: printf("Enter value: "); scanf("%d", &item); root = insert(root, item); break;
            case 2: printf("Enter value: "); scanf("%d", &item); root = deleteNode(root, item); break;
            case 3: printf("Enter value: "); scanf("%d", &item); search(root, item); break;
            case 4: inorder(root); printf("\n"); break;
            case 5: exit(0);
            default: printf("Invalid choice\n");
        }
    }
}
```

---

## **15. Program to perform traversals on a Binary Tree**

### **Traversals:**

a. Inorder
b. Preorder
c. Postorder

---

### **Algorithm**

**Step 1:** Start the program.
**Step 2:** Define a structure for tree nodes.
**Step 3:** Create a binary tree.
**Step 4:**

* **Inorder:** Traverse left subtree → visit root → traverse right subtree.
* **Preorder:** Visit root → traverse left → traverse right.
* **Postorder:** Traverse left → traverse right → visit root.
  **Step 5:** Display traversal results.
  **Step 6:** Stop.

---

### **Program**

```c
#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *left, *right;
};

struct node* newNode(int data) {
    struct node* n = malloc(sizeof(struct node));
    n->data = data;
    n->left = n->right = NULL;
    return n;
}

void inorder(struct node* root) {
    if (root) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

void preorder(struct node* root) {
    if (root) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

void postorder(struct node* root) {
    if (root) {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}

int main() {
    struct node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);

    printf("\nInorder: "); inorder(root);
    printf("\nPreorder: "); preorder(root);
    printf("\nPostorder: "); postorder(root);
}
```

---

## **16. Graph Traversal using Adjacency Matrix**

### **Traversals:**

a. BFS
b. DFS

---

### **Algorithm**

**Step 1:** Input number of vertices and adjacency matrix.
**Step 2:**

* **BFS:**

  1. Initialize queue, mark start vertex as visited.
  2. Dequeue vertex, print it.
  3. Enqueue all unvisited adjacent vertices.
  4. Repeat until queue empty.
* **DFS:**

  1. Mark current vertex as visited, print it.
  2. Recursively visit all adjacent unvisited vertices.
     **Step 3:** Stop.

---

### **Program**

```c
#include <stdio.h>
#define MAX 10

int adj[MAX][MAX], visited[MAX], n;

void DFS(int v) {
    printf("%d ", v);
    visited[v] = 1;
    for (int i = 0; i < n; i++)
        if (adj[v][i] && !visited[i])
            DFS(i);
}

void BFS(int v) {
    int queue[MAX], front = 0, rear = 0;
    visited[v] = 1;
    queue[rear++] = v;

    while (front < rear) {
        int node = queue[front++];
        printf("%d ", node);
        for (int i = 0; i < n; i++)
            if (adj[node][i] && !visited[i]) {
                visited[i] = 1;
                queue[rear++] = i;
            }
    }
}

int main() {
    int start;
    printf("Enter number of vertices: ");
    scanf("%d", &n);
    printf("Enter adjacency matrix:\n");
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &adj[i][j]);
    printf("Enter start vertex: ");
    scanf("%d", &start);

    printf("BFS: ");
    for (int i = 0; i < n; i++) visited[i] = 0;
    BFS(start);

    printf("\nDFS: ");
    for (int i = 0; i < n; i++) visited[i] = 0;
    DFS(start);
}
```

---

## **17. Sorting Algorithms**

### **a. Selection Sort**

### **b. Bubble Sort**

### **c. Insertion Sort**

---

### **Algorithm**

1. **Selection Sort**

   * Repeatedly find minimum element and place it in sorted position.
2. **Bubble Sort**

   * Compare adjacent elements, swap if in wrong order.
3. **Insertion Sort**

   * Take each element and insert into its correct position in sorted part of array.

---

### **Program**

```c
#include <stdio.h>

void selectionSort(int a[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min = i;
        for (int j = i + 1; j < n; j++)
            if (a[j] < a[min])
                min = j;
        int temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }
}

void bubbleSort(int a[], int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (a[j] > a[j + 1]) {
                int t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
}

void insertionSort(int a[], int n) {
    for (int i = 1; i < n; i++) {
        int key = a[i], j = i - 1;
        while (j >= 0 && a[j] > key)
            a[j + 1] = a[j--];
        a[j + 1] = key;
    }
}

void display(int a[], int n) {
    for (int i = 0; i < n; i++) printf("%d ", a[i]);
    printf("\n");
}

int main() {
    int a[50], n, ch;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &a[i]);
    printf("1.Selection 2.Bubble 3.Insertion\nEnter choice: ");
    scanf("%d", &ch);
    switch (ch) {
        case 1: selectionSort(a, n); break;
        case 2: bubbleSort(a, n); break;
        case 3: insertionSort(a, n); break;
    }
    printf("Sorted array: ");
    display(a, n);
}
```

---

## **18. Merge Sort**

---

### **Algorithm**

1. Divide the array into two halves.
2. Recursively sort both halves.
3. Merge the sorted halves.
4. Continue until the array is fully sorted.

---

### **Program**

```c
#include <stdio.h>

void merge(int a[], int l, int m, int r) {
    int i = l, j = m + 1, k = 0, b[100];
    while (i <= m && j <= r)
        b[k++] = (a[i] < a[j]) ? a[i++] : a[j++];
    while (i <= m) b[k++] = a[i++];
    while (j <= r) b[k++] = a[j++];
    for (i = l, j = 0; i <= r; i++, j++) a[i] = b[j];
}

void mergeSort(int a[], int l, int r) {
    if (l < r) {
        int m = (l + r) / 2;
        mergeSort(a, l, m);
        mergeSort(a, m + 1, r);
        merge(a, l, m, r);
    }
}

int main() {
    int a[50], n;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &a[i]);
    mergeSort(a, 0, n - 1);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", a[i]);
}
```

---

## **19. Quick Sort**

---

### **Algorithm**

1. Choose pivot (first element).
2. Partition array: elements smaller to left, greater to right.
3. Recursively sort subarrays.
4. Combine to form final sorted array.

---

### **Program**

```c
#include <stdio.h>

int partition(int a[], int lb, int ub) {
    int pivot = a[lb], start = lb, end = ub;
    while (start < end) {
        while (a[start] <= pivot && start < ub) start++;
        while (a[end] > pivot) end--;
        if (start < end) {
            int temp = a[start]; a[start] = a[end]; a[end] = temp;
        }
    }
    a[lb] = a[end]; a[end] = pivot;
    return end;
}

void quickSort(int a[], int lb, int ub) {
    if (lb < ub) {
        int loc = partition(a, lb, ub);
        quickSort(a, lb, loc - 1);
        quickSort(a, loc + 1, ub);
    }
}

int main() {
    int a[50], n;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &a[i]);
    quickSort(a, 0, n - 1);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", a[i]);
}
```

---

## **20. Binary Search**

### **a. Iterative**

### **b. Recursive**

---

### **Algorithm**

**Iterative:**

1. Initialize `low = 0`, `high = n-1`.
2. Repeat while `low <= high`.
3. Find mid = (low + high)/2.
4. If `a[mid] == key` → found.
5. If `a[mid] < key` → `low = mid + 1`.
6. Else `high = mid - 1`.

**Recursive:**

* Same logic using recursion.

---

### **Program**

```c
#include <stdio.h>

int binarySearchIter(int a[], int n, int key) {
    int l = 0, r = n - 1;
    while (l <= r) {
        int m = (l + r) / 2;
        if (a[m] == key) return m;
        else if (a[m] < key) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

int binarySearchRec(int a[], int l, int r, int key) {
    if (l <= r) {
        int m = (l + r) / 2;
        if (a[m] == key) return m;
        else if (a[m] < key) return binarySearchRec(a, m + 1, r, key);
        else return binarySearchRec(a, l, m - 1, key);
    }
    return -1;
}

int main() {
    int a[50], n, key;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter sorted elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &a[i]);
    printf("Enter key: ");
    scanf("%d", &key);

    int pos1 = binarySearchIter(a, n, key);
    int pos2 = binarySearchRec(a, 0, n - 1, key);

    if (pos1 != -1) printf("Found at %d (Iterative)\n", pos1);
    else printf("Not found (Iterative)\n");
    if (pos2 != -1) printf("Found at %d (Recursive)\n", pos2);
    else printf("Not found (Recursive)\n");
}
```

---

Would you like me to **format this into a printable PDF or `.docx` report file** (with headings, borders, and page titles like a college submission)?
