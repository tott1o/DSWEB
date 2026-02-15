
### 🧩 difference b/w stack and queue

| Stack                         | Queue                                     |
| ----------------------------- | ----------------------------------------- |
| **LIFO** – Last In, First Out | **FIFO** – First In, First Out            |
| Insert & delete at **top**    | Insert at **rear**, delete from **front** |
| Example: Pile of plates       | Example: Line at a ticket counter         |

 **queue**,

* **enqueue** → insert at **rear**,
* **dequeue** → remove from **front**.

---

### 🧠 Algorithms (Queue using Array)

#### 1️⃣ ENQUEUE (insert element)

```
Algorithm ENQUEUE(queue, front, rear, MAX, item)
1. If rear == MAX - 1
      Print "Queue Overflow"
2. Else
      If front == -1
            front ← 0
      rear ← rear + 1
      queue[rear] ← item
```

#### 2️⃣ DEQUEUE (remove element)

```
Algorithm DEQUEUE(queue, front, rear)
1. If front == -1 or front > rear
      Print "Queue Underflow"
2. Else
      item ← queue[front]
      front ← front + 1
      Print item deleted
```

#### 3️⃣ DISPLAY

```
Algorithm DISPLAY(queue, front, rear)
1. If front == -1
      Print "Queue is Empty"
2. Else
      For i ← front to rear
            Print queue[i]
```
Excellent 👍 let’s build the **Queue implementation using an array in C** step-by-step.

---

### QUEUE using ARRAY

* `queue[MAX]` → stores data
* `front` → points to the **first element**
* `rear` → points to the **last element**

When queue is empty:
`front = -1` and `rear = -1`

---

### C Program — Queue using Array

```c
#include <stdio.h>
#define MAX 5

int queue[MAX];
int front = -1;
int rear = -1;

// Function to insert element (enqueue)
void enqueue(int value) {
    if (rear == MAX - 1) {
        printf("Queue Overflow!\n");
    } else {
        if (front == -1)
            front = 0;
        rear++;
        queue[rear] = value;
        printf("%d inserted into queue.\n", value);
    }
}

// Function to delete element (dequeue)
void dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue Underflow!\n");
    } else {
        printf("%d deleted from queue.\n", queue[front]);
        front++;
        if (front > rear) {  // Reset when queue becomes empty
            front = rear = -1;
        }
    }
}

// Function to show front element
void peek() {
    if (front == -1) {
        printf("Queue is Empty!\n");
    } else {
        printf("Front element = %d\n", queue[front]);
    }
}

// Function to display all elements
void display() {
    if (front == -1) {
        printf("Queue is Empty!\n");
    } else {
        printf("Queue elements: ");
        for (int i = front; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
        printf("\n");
    }
}

int main() {
    int choice, value;
    while (1) {
        printf("\n--- Queue Menu (Array) ---\n");
        printf("1. Enqueue\n2. Dequeue\n3. Peek\n4. Display\n5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1:
            printf("Enter value to insert: ");
            scanf("%d", &value);
            enqueue(value);
            break;
        case 2:
            dequeue();
            break;
        case 3:
            peek();
            break;
        case 4:
            display();
            break;
        case 5:
            return 0;
        default:
            printf("Invalid choice!\n");
        }
    }
}
```


---

### QUEUE using  LINKED LIST

We’ll maintain two pointers:

* **`front`** → points to the first node (to remove from)
* **`rear`** → points to the last node (to insert at)

Each node contains:

* `data` (the element)
* `next` (link to next node)

---

### 🧠 Step 2: Algorithms

**ENQUEUE(item):**

```
1. Create a new node
2. newnode->data ← item
3. newnode->next ← NULL
4. If rear == NULL
      front ← rear ← newnode
   Else
      rear->next ← newnode
      rear ← newnode
```

**DEQUEUE():**

```
1. If front == NULL
      Print "Queue Underflow"
2. Else
      temp ← front
      item ← temp->data
      front ← front->next
      If front == NULL
            rear ← NULL
      Free(temp)
      Print item deleted
```

**DISPLAY():**

```
temp ← front
While temp ≠ NULL
      Print temp->data
      temp ← temp->next
```

---


```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* front = NULL;
struct Node* rear = NULL;

// Function to insert element (enqueue)
void enqueue(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory not allocated!\n");
        return;
    }
    newNode->data = value;
    newNode->next = NULL;

    if (rear == NULL) {  // Empty queue
        front = rear = newNode;
    } else {
        rear->next = newNode;
        rear = newNode;
    }
    printf("%d inserted into queue.\n", value);
}

// Function to delete element (dequeue)
void dequeue() {
    if (front == NULL) {
        printf("Queue Underflow!\n");
        return;
    }
    struct Node* temp = front;
    printf("%d deleted from queue.\n", temp->data);
    front = front->next;

    if (front == NULL)  // Queue becomes empty
        rear = NULL;

    free(temp);
}

// Function to show front element
void peek() {
    if (front == NULL) {
        printf("Queue is Empty!\n");
    } else {
        printf("Front element = %d\n", front->data);
    }
}

// Function to display all elements
void display() {
    if (front == NULL) {
        printf("Queue is Empty!\n");
        return;
    }
    struct Node* temp = front;
    printf("Queue elements: ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main() {
    int choice, value;
    while (1) {
        printf("\n--- Queue Menu (Linked List) ---\n");
        printf("1. Enqueue\n2. Dequeue\n3. Peek\n4. Display\n5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1:
            printf("Enter value to insert: ");
            scanf("%d", &value);
            enqueue(value);
            break;
        case 2:
            dequeue();
            break;
        case 3:
            peek();
            break;
        case 4:
            display();
            break;
        case 5:
            return 0;
        default:
            printf("Invalid choice!\n");
        }
    }
}
```

