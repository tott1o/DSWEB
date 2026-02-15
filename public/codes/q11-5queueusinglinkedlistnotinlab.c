#include <stdio.h>
#include <stdlib.h>

// Define node structure
struct Node {
    int data;
    struct Node* next;
};

// Define a Queue structure with front and rear pointers
struct Queue {
    struct Node* front;
    struct Node* rear;
};

// Initialize queue
void initQueue(struct Queue* q) {
    q->front = q->rear = NULL;
}

// Check if queue is empty
int isEmpty(struct Queue* q) {
    return (q->front == NULL);
}

// Function to create a new node (similar to getnode)
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

// Function to free a node (similar to freenode)
void freenode(struct Node* p) {
    free(p);
}

// Enqueue operation (Insert at rear)
void enqueue(struct Queue* q, int value) {
    struct Node* newNode = getnode(value);

    // If queue is empty, both front and rear are this new node
    if (q->rear == NULL) {
        q->front = q->rear = newNode;
    } else {
        q->rear->next = newNode;
        q->rear = newNode;
    }

    printf("%d enqueued into queue.\n", value);
}

// Dequeue operation (Remove from front)
int dequeue(struct Queue* q) {
    if (isEmpty(q)) {
        printf("Queue Underflow! Cannot dequeue.\n");
        exit(1);
    }

    struct Node* temp = q->front;
    int value = temp->data;
    q->front = q->front->next;

    // If queue becomes empty, set rear to NULL
    if (q->front == NULL)
        q->rear = NULL;

    freenode(temp);
    return value;
}

// Peek front element
int peek(struct Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty.\n");
        return -1;
    }
    return q->front->data;
}

// Display all elements
void display(struct Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty.\n");
        return;
    }
    struct Node* temp = q->front;
    printf("Queue elements (front to rear): ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

// Main function
int main() {
    struct Queue q;
    initQueue(&q);

    int choice, value;

    while (1) {
        printf("\n--- Queue Using Linked List ---\n");
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
