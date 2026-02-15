
# Stack Data Structure Operations and Algorithms

A **Stack** is a **Last-In, First-Out (LIFO)** data structure. Its operations are typically performed at one end, called the **top**.

| Operation | Description |
| :--- | :--- |
| **Push** | Insert an element on top |
| **Pop** | Remove an element from top |
| **Peek (Top)** | Show top element without removing it |
| **isEmpty** | Check if the stack is empty |
| **Display** | Show all elements in the stack |

---

## 🧩 Step 1: Algorithm for each operation 

### 1️⃣ PUSH (insert element)

This operation adds an element to the top of the stack. It checks for **Stack Overflow** before insertion.

```algorithm
Algorithm PUSH(stack, top, MAX, item)
1. If top == MAX - 1
      Print "Stack Overflow"
2. Else
      top ← top + 1
      stack[top] ← item
3. End if
````

-----

### 2️⃣ POP (remove element)

This operation removes and returns the element at the top of the stack. It checks for **Stack Underflow** before removal.

```algorithm
Algorithm POP(stack, top)
1. If top == -1
      Print "Stack Underflow"
2. Else
      item ← stack[top]
      top ← top - 1
      Return item
3. End if
```

-----

### 3️⃣ PEEK (view top element)

This operation allows viewing the element at the top of the stack **without removing it**.

```algorithm
Algorithm PEEK(stack, top)
1. If top == -1
      Print "Stack is Empty"
2. Else
      Print stack[top]
3. End if
```

-----

### 4️⃣ isEmpty (Check if empty)

This operation checks the value of the `top` pointer to determine if the stack contains any elements.

```algorithm
Algorithm isEmpty(top)
1. If top == -1
      Return TRUE
2. Else
      Return FALSE
3. End if
```

-----

### 5️⃣ DISPLAY (Show all elements)

This operation iterates through the stack from the **top** down to the bottom (index 0) to print all elements.

```algorithm
Algorithm DISPLAY(stack, top)
1. If top == -1
      Print "Stack is Empty"
2. Else
      For i ← top down to 0
            Print stack[i]
3. End for
```

---

### 🧩 Step 2: Understanding structure using array

We’ll use:

* An **array** `stack[MAX]` to hold elements.
* An **integer** `top` to mark the top index (`-1` means empty).

---

### ✅ Complete C Program (Stack using Array)

```c
#include <stdio.h>
#define MAX 5   // maximum size of stack

int stack[MAX];
int top = -1;

// Function to push element into stack
void push(int item) {
    if (top == MAX - 1) {
        printf("Stack Overflow!\n");
    } else {
        top++;
        stack[top] = item;
        printf("%d pushed to stack.\n", item);
    }
}

// Function to pop element from stack
void pop() {
    if (top == -1) {
        printf("Stack Underflow!\n");
    } else {
        int item = stack[top];
        top--;
        printf("%d popped from stack.\n", item);
    }
}

// Function to show top element
void peek() {
    if (top == -1) {
        printf("Stack is Empty!\n");
    } else {
        printf("Top element = %d\n", stack[top]);
    }
}

// Function to display all stack elements
void display() {
    if (top == -1) {
        printf("Stack is Empty!\n");
    } else {
        printf("Stack elements: ");
        for (int i = top; i >= 0; i--) {
            printf("%d ", stack[i]);
        }
        printf("\n");
    }
}

int main() {
    int choice, value;
    while (1) {
        printf("\n--- Stack Menu ---\n");
        printf("1. Push\n2. Pop\n3. Peek\n4. Display\n5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1:
            printf("Enter value to push: ");
            scanf("%d", &value);
            push(value);
            break;
        case 2:
            pop();
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

### 🧩 Step 1: using linkedlist

Each **node** has:

* `data` (the value)
* `next` (pointer to next node)

We’ll keep a pointer called **`top`** to point to the *top node* of the stack.

---

### 🧠 Algorithms (Linked List version)

**PUSH(item):**

```
1. Create new node
2. newnode->data ← item
3. newnode->next ← top
4. top ← newnode
```

**POP():**

```
1. If top == NULL
      Print "Stack Underflow"
2. Else
      temp ← top
      item ← temp->data
      top ← top->next
      Free(temp)
      Print item popped
```

**PEEK():**

```
If top == NULL
      Print "Stack is Empty"
Else
      Print top->data
```

**DISPLAY():**

```
temp ← top
While temp ≠ NULL
      Print temp->data
      temp ← temp->next
```

---

### ✅ Step 2: Complete C Program (Linked List Implementation)

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* top = NULL;

// Push operation
void push(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Stack Overflow!\n");
        return;
    }
    newNode->data = value;
    newNode->next = top;
    top = newNode;
    printf("%d pushed to stack.\n", value);
}

// Pop operation
void pop() {
    if (top == NULL) {
        printf("Stack Underflow!\n");
        return;
    }
    struct Node* temp = top;
    int poppedValue = temp->data;
    top = top->next;
    free(temp);
    printf("%d popped from stack.\n", poppedValue);
}

// Peek operation
void peek() {
    if (top == NULL) {
        printf("Stack is Empty!\n");
    } else {
        printf("Top element = %d\n", top->data);
    }
}

// Display operation
void display() {
    if (top == NULL) {
        printf("Stack is Empty!\n");
        return;
    }
    struct Node* temp = top;
    printf("Stack elements: ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main() {
    int choice, value;
    while (1) {
        printf("\n--- Stack Menu (Linked List) ---\n");
        printf("1. Push\n2. Pop\n3. Peek\n4. Display\n5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1:
            printf("Enter value to push: ");
            scanf("%d", &value);
            push(value);
            break;
        case 2:
            pop();
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

