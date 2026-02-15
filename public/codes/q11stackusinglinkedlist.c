#include <stdio.h>
#include <stdlib.h>

// Define structure for node
struct Node {
    int data;
    struct Node* next;
};

// top pointer (acts as stack top)
struct Node* top = NULL;

// Function to create a new node (similar to getnode)
struct Node* getnode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("\nOverflow! No more memory available.\n");
        exit(1);
    }
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Function to release a node (similar to freenode)
void freenode(struct Node* p) {
    free(p);
}

// Check if stack is empty
int isEmpty() {
    return (top == NULL);
}

// Push operation
void push(int value) {
    struct Node* newNode = getnode(value);
    newNode->next = top;
    top = newNode;
    printf("%d pushed onto stack.\n", value);
}

// Pop operation
int pop() {
    if (isEmpty()) {
        printf("\nStack Underflow! Cannot pop.\n");
        exit(1);
    }
    struct Node* temp = top;
    int value = temp->data;
    top = top->next;
    freenode(temp);
    return value;
}

// Peek operation
int peek() {
    if (isEmpty()) {
        printf("\nStack is empty.\n");
        return -1;
    }
    return top->data;
}

// Display stack elements
void display() {
    if (isEmpty()) {
        printf("\nStack is empty.\n");
        return;
    }
    struct Node* temp = top;
    printf("\nStack elements (top to bottom): ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

// Main function
int main() {
    int choice, value;

    while (1) {
        printf("\n--- Stack Using Linked List ---\n");
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
            printf("Popped value: %d\n", pop());
            break;
        case 3:
            printf("Top element: %d\n", peek());
            break;
        case 4:
            display();
            break;
        case 5:
            exit(0);
        default:
            printf("Invalid choice! Try again.\n");
        }
    }

    return 0;
}
