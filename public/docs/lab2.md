
# **DATA STRUCTURES – LAB PROGRAMS**

---

## **12. Implement a Queue using a Circular Singly Linked List**

---

### **Aim**

To implement all queue operations (enqueue, dequeue, display) using a **Circular Singly Linked List**.

---

### **Algorithm**

**Step 1:** Start the program.
**Step 2:** Define a structure `node` with fields `data` and `link`.
**Step 3:** Initialize two pointers — `front` and `rear` as NULL.

**For ENQUEUE (Insert):**

1. Create a new node.
2. If queue is empty, make new node point to itself.
3. Else insert new node at the end and link `rear->link` to `front`.
4. Update `rear` to new node.

**For DEQUEUE (Delete):**

1. If queue empty, display “Queue Underflow.”
2. If only one node, delete it and set `front = rear = NULL`.
3. Otherwise, delete `front` node and make `rear->link` point to new `front`.

**For DISPLAY:**

1. Traverse from `front` to `rear`, printing each node’s data.
2. Stop when you reach the starting node again.

**Step 4:** Stop.

---

### **Program**

```c
#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *link;
};

struct node *front = NULL, *rear = NULL;

void enqueue(int item) {
    struct node *newNode = malloc(sizeof(struct node));
    newNode->data = item;
    if (front == NULL) {
        front = rear = newNode;
        rear->link = front;
    } else {
        rear->link = newNode;
        rear = newNode;
        rear->link = front;
    }
    printf("%d inserted\n", item);
}

void dequeue() {
    if (front == NULL) {
        printf("Queue Underflow\n");
        return;
    }
    struct node *temp = front;
    if (front == rear) {
        printf("Deleted: %d\n", front->data);
        front = rear = NULL;
    } else {
        printf("Deleted: %d\n", front->data);
        front = front->link;
        rear->link = front;
    }
    free(temp);
}

void display() {
    if (front == NULL) {
        printf("Queue is Empty\n");
        return;
    }
    struct node *temp = front;
    printf("Queue: ");
    do {
        printf("%d ", temp->data);
        temp = temp->link;
    } while (temp != front);
    printf("\n");
}

int main() {
    int choice, item;
    while (1) {
        printf("\n1.Enqueue 2.Dequeue 3.Display 4.Exit\n");
        scanf("%d", &choice);
        switch (choice) {
            case 1: printf("Enter item: "); scanf("%d", &item); enqueue(item); break;
            case 2: dequeue(); break;
            case 3: display(); break;
            case 4: exit(0);
            default: printf("Invalid choice\n");
        }
    }
}
```

---

## **13. Polynomial Operations using Linked List**

### **Perform:**

a. **Addition**
b. **Multiplication**

---

### **Aim**

To represent two polynomials using linked lists and perform **addition** and **multiplication**.

---

### **Algorithm**

**Representation:**
Each node contains:

* Coefficient (`coeff`)
* Exponent (`exp`)
* Pointer to next term (`link`)

---

#### **1. Polynomial Creation**

**Step 1:** Input the number of terms.
**Step 2:** For each term, create a node with coefficient and exponent.
**Step 3:** Link all nodes in decreasing order of exponent.

---

#### **2. Polynomial Addition**

**Step 1:** Initialize pointers `p1` and `p2` for both polynomials.
**Step 2:** Compare exponents:

* If equal → add coefficients and insert into result.
* If one exponent > other → copy that term to result.
  **Step 3:** Continue until both polynomials end.

---

#### **3. Polynomial Multiplication**

**Step 1:** For each term in `p1`, multiply with every term in `p2`.
**Step 2:** Create a temporary polynomial for each multiplication.
**Step 3:** Add like terms having same exponent.

---

#### **4. Display**

Traverse and print each node in `coeffx^exp` format.

---

### **Program**

```c
#include <stdio.h>
#include <stdlib.h>

struct node {
    int coeff, exp;
    struct node *link;
};

struct node* create(struct node *head) {
    int n, c, e;
    struct node *newNode, *temp;
    printf("Enter number of terms: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        printf("Enter coefficient and exponent: ");
        scanf("%d%d", &c, &e);
        newNode = malloc(sizeof(struct node));
        newNode->coeff = c;
        newNode->exp = e;
        newNode->link = NULL;
        if (head == NULL)
            head = newNode;
        else {
            temp = head;
            while (temp->link != NULL)
                temp = temp->link;
            temp->link = newNode;
        }
    }
    return head;
}

struct node* add(struct node *p1, struct node *p2) {
    struct node *result = NULL, *temp = NULL, *newNode;
    while (p1 && p2) {
        newNode = malloc(sizeof(struct node));
        if (p1->exp == p2->exp) {
            newNode->coeff = p1->coeff + p2->coeff;
            newNode->exp = p1->exp;
            p1 = p1->link;
            p2 = p2->link;
        } else if (p1->exp > p2->exp) {
            newNode->coeff = p1->coeff;
            newNode->exp = p1->exp;
            p1 = p1->link;
        } else {
            newNode->coeff = p2->coeff;
            newNode->exp = p2->exp;
            p2 = p2->link;
        }
        newNode->link = NULL;
        if (result == NULL)
            result = temp = newNode;
        else {
            temp->link = newNode;
            temp = newNode;
        }
    }
    while (p1) {
        newNode = malloc(sizeof(struct node));
        newNode->coeff = p1->coeff;
        newNode->exp = p1->exp;
        newNode->link = NULL;
        temp->link = newNode;
        temp = newNode;
        p1 = p1->link;
    }
    while (p2) {
        newNode = malloc(sizeof(struct node));
        newNode->coeff = p2->coeff;
        newNode->exp = p2->exp;
        newNode->link = NULL;
        temp->link = newNode;
        temp = newNode;
        p2 = p2->link;
    }
    return result;
}

struct node* multiply(struct node *p1, struct node *p2) {
    struct node *result = NULL;
    struct node *temp1, *temp2, *newNode, *ptr;
    for (temp1 = p1; temp1 != NULL; temp1 = temp1->link) {
        for (temp2 = p2; temp2 != NULL; temp2 = temp2->link) {
            int coeff = temp1->coeff * temp2->coeff;
            int exp = temp1->exp + temp2->exp;
            newNode = malloc(sizeof(struct node));
            newNode->coeff = coeff;
            newNode->exp = exp;
            newNode->link = NULL;

            if (result == NULL)
                result = newNode;
            else {
                ptr = result;
                struct node *prev = NULL;
                while (ptr != NULL && ptr->exp > exp) {
                    prev = ptr;
                    ptr = ptr->link;
                }
                if (ptr != NULL && ptr->exp == exp) {
                    ptr->coeff += coeff;
                    free(newNode);
                } else {
                    if (prev == NULL) {
                        newNode->link = result;
                        result = newNode;
                    } else {
                        newNode->link = prev->link;
                        prev->link = newNode;
                    }
                }
            }
        }
    }
    return result;
}

void display(struct node *head) {
    struct node *temp = head;
    if (!temp) {
        printf("0\n");
        return;
    }
    while (temp) {
        printf("%dx^%d", temp->coeff, temp->exp);
        temp = temp->link;
        if (temp != NULL)
            printf(" + ");
    }
    printf("\n");
}

int main() {
    struct node *p1 = NULL, *p2 = NULL, *sum = NULL, *prod = NULL;
    printf("\nEnter first polynomial:\n");
    p1 = create(p1);
    printf("\nEnter second polynomial:\n");
    p2 = create(p2);
    printf("\nFirst Polynomial: ");
    display(p1);
    printf("Second Polynomial: ");
    display(p2);
    sum = add(p1, p2);
    printf("\nSum: ");
    display(sum);
    prod = multiply(p1, p2);
    printf("Product: ");
    display(prod);
}
```

---

Would you like me to **combine Q12–Q20 (all)** into one **formatted PDF report** (college-style with cover page, headings, borders, and pagination)?
I can generate that directly for you.
