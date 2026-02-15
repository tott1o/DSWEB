#include <stdio.h>
#include <stdlib.h>

// Define node structure
struct Node {
    int data;
    struct Node* next;
};

// Define Queue with only one pointer (rear)
struct Queue {
    struct Node* rear;
};

// Initialize queue
void initQueue(struct Queue* q) {
    q->rear = NULL;
}

// Check if queue is empty
int isEmpty(struct Queue* q) {
    return (q->rear == NULL);
}

// Create new node
struct Node* getnode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Overflow! No memory available.\n");
        exit(1);
    }
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Free node
void freenode(struct Node* p) {
    free(p);
}

// Enqueue operation
void enqueue(struct Queue* q, int value) {
    struct Node* newNode = getnode(value);

    if (isEmpty(q)) {
        // When queue is empty, new node points to itself
        newNode->next = newNode;
        q->rear = newNode;
    } else {
        // Insert new node after rear
        newNode->next = q->rear->next; // newNode->next = front
        q->rear->next = newNode;
        q->rear = newNode; // new node becomes new rear
    }

    printf("%d enqueued into circular queue.\n", value);
}

// Dequeue operation
int dequeue(struct Queue* q) {
    if (isEmpty(q)) {
        printf("Queue Underflow! Cannot dequeue.\n");
        exit(1);
    }

    struct Node* front = q->rear->next; // node after rear = front
    int value = front->data;

    // If only one node
    if (q->rear == front) {
        q->rear = NULL;
    } else {
        q->rear->next = front->next; // bypass the front node
    }

    freenode(front);
    return value;
}

// Peek front element
int peek(struct Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty.\n");
        return -1;
    }
    return q->rear->next->data; // front = rear->next
}

// Display all elements
void display(struct Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty.\n");
        return;
    }

    struct Node* temp = q->rear->next; // start from front
    printf("Queue elements (front to rear): ");
    do {
        printf("%d ", temp->data);
        temp = temp->next;
    } while (temp != q->rear->next); // stop when back to front

    printf("\n");
}

// Main function
int main() {
    struct Queue q;
    initQueue(&q);
    int choice, value;

    while (1) {
        printf("\n--- Queue Using Circular Linked List ---\n");
        printf("1. Enqueue\n2. Dequeue\n3. Peek\n4. Display\n5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1:
            printf("Enter value to enqueue: ");
            scanf("%d", &value);
            enqueue(&q, value);
            break;
        case 2:
            printf("Dequeued value: %d\n", dequeue(&q));
            break;
        case 3:
            printf("Front element: %d\n", peek(&q));
            break;
        case 4:
            display(&q);
            break;
        case 5:
            exit(0);
        default:
            printf("Invalid choice! Try again.\n");
        }
    }

    return 0;
}
