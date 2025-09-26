#include <stdio.h>
#include <stdlib.h>

// Node structure
struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

// Create a new node
struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Insert at beginning
void insertAtBeginning(int value) {
    struct Node* newNode = createNode(value);
    if (head == NULL) {
        head = newNode;
        head->next = head; // circular
    } else {
        struct Node* temp = head;
        while (temp->next != head) temp = temp->next;
        newNode->next = head;
        temp->next = newNode;
        head = newNode;
    }
    printf("Inserted %d at beginning.\n", value);
}

// Insert at end
void insertAtEnd(int value) {
    struct Node* newNode = createNode(value);
    if (head == NULL) {
        head = newNode;
        head->next = head;
    } else {
        struct Node* temp = head;
        while (temp->next != head) temp = temp->next;
        temp->next = newNode;
        newNode->next = head;
    }
    printf("Inserted %d at end.\n", value);
}

// Insert after position
void insertAfterPosition(int value, int pos) {
    if (head == NULL) {
        printf("List empty, inserting as first node.\n");
        insertAtBeginning(value);
        return;
    }
    struct Node* temp = head;
    int i = 1;
    while (i < pos && temp->next != head) {
        temp = temp->next;
        i++;
    }
    struct Node* newNode = createNode(value);
    newNode->next = temp->next;
    temp->next = newNode;
    printf("Inserted %d after position %d.\n", value, pos);
}

// Insert before position
void insertBeforePosition(int value, int pos) {
    if (head == NULL || pos <= 1) {
        insertAtBeginning(value);
        return;
    }
    struct Node* temp = head;
    int i = 1;
    while (i < pos - 1 && temp->next != head) {
        temp = temp->next;
        i++;
    }
    struct Node* newNode = createNode(value);
    newNode->next = temp->next;
    temp->next = newNode;
    printf("Inserted %d before position %d.\n", value, pos);
}

// Delete from beginning
void deleteFromBeginning() {
    if (head == NULL) {
        printf("List empty.\n");
        return;
    }
    if (head->next == head) {
        free(head);
        head = NULL;
    } else {
        struct Node* temp = head;
        while (temp->next != head) temp = temp->next;
        struct Node* del = head;
        temp->next = head->next;
        head = head->next;
        free(del);
    }
    printf("Deleted node from beginning.\n");
}

// Delete from end
void deleteFromEnd() {
    if (head == NULL) {
        printf("List empty.\n");
        return;
    }
    if (head->next == head) {
        free(head);
        head = NULL;
    } else {
        struct Node* temp = head;
        while (temp->next->next != head) temp = temp->next;
        struct Node* del = temp->next;
        temp->next = head;
        free(del);
    }
    printf("Deleted node from end.\n");
}

// Delete from position
void deleteFromPosition(int pos) {
    if (head == NULL) {
        printf("List empty.\n");
        return;
    }
    if (pos == 1) {
        deleteFromBeginning();
        return;
    }
    struct Node* temp = head;
    int i = 1;
    while (i < pos - 1 && temp->next != head) {
        temp = temp->next;
        i++;
    }
    if (temp->next == head) {
        printf("Position out of bounds.\n");
        return;
    }
    struct Node* del = temp->next;
    temp->next = del->next;
    free(del);
    printf("Deleted node at position %d.\n", pos);
}

// Count nodes
void countNodes() {
    if (head == NULL) {
        printf("List empty.\n");
        return;
    }
    int count = 0;
    struct Node* temp = head;
    do {
        count++;
        temp = temp->next;
    } while (temp != head);
    printf("Number of nodes = %d\n", count);
}

// Display list
void displayList() {
    if (head == NULL) {
        printf("List empty.\n");
        return;
    }
    struct Node* temp = head;
    printf("Circular Linked List: ");
    do {
        printf("%d -> ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("(back to head)\n");
}

// Main menu
int main() {
    int choice, value, pos;
    printf("\n--- Circular Linked List Menu ---\n");
        printf("1. Insert at Beginning\n");
        printf("2. Insert at End\n");
        printf("3. Insert After Position\n");
        printf("4. Insert Before Position\n");
        printf("5. Delete from Beginning\n");
        printf("6. Delete from End\n");
        printf("7. Delete from Position\n");
        printf("8. Count Nodes\n");
        printf("9. Display List\n");
        printf("10. Exit\n");
        printf("=================================\n");
    
    while (1) {
        
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &value);
                insertAtBeginning(value);
                break;
            case 2:
                printf("Enter value: ");
                scanf("%d", &value);
                insertAtEnd(value);
                break;
            case 3:
                printf("Enter value: ");
                scanf("%d", &value);
                printf("Enter position: ");
                scanf("%d", &pos);
                insertAfterPosition(value, pos);
                break;
            case 4:
                printf("Enter value: ");
                scanf("%d", &value);
                printf("Enter position: ");
                scanf("%d", &pos);
                insertBeforePosition(value, pos);
                break;
            case 5:
                deleteFromBeginning();
                break;
            case 6:
                deleteFromEnd();
                break;
            case 7:
                printf("Enter position: ");
                scanf("%d", &pos);
                deleteFromPosition(pos);
                break;
            case 8:
                countNodes();
                break;
            case 9:
                displayList();
                break;
            case 10:
                printf("Exiting...\n");
                exit(0);
            default:
                printf("Invalid choice.\n");
        }
    }
    return 0;
}
