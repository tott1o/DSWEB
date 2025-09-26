#include <stdio.h>
#include <stdlib.h>

// Node structure
struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
};

struct Node* head = NULL;

// Function to create new node
struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = NULL;
    return newNode;
}

// Insert at beginning
void insertAtBeginning(int value) {
    struct Node* newNode = createNode(value);
    if (head != NULL) {
        newNode->next = head;
        head->prev = newNode;
    }
    head = newNode;
    printf("Inserted %d at beginning.\n", value);
}

// Insert at end
void insertAtEnd(int value) {
    struct Node* newNode = createNode(value);
    if (head == NULL) {
        head = newNode;
        return;
    }
    struct Node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = newNode;
    newNode->prev = temp;
    printf("Inserted %d at end.\n", value);
}

// Insert in sorted order
void insertSorted(int value) {
    struct Node* newNode = createNode(value);
    if (head == NULL || value < head->data) {
        newNode->next = head;
        if (head != NULL)
            head->prev = newNode;
        head = newNode;
        return;
    }
    struct Node* temp = head;
    while (temp->next != NULL && temp->next->data < value) {
        temp = temp->next;
    }
    newNode->next = temp->next;
    if (temp->next != NULL)
        temp->next->prev = newNode;
    temp->next = newNode;
    newNode->prev = temp;
    printf("Inserted %d in sorted order.\n", value);
}

void insertBeforePosition(int value) {
    int pos, i = 1;
    printf("Enter position to insert before: ");
    scanf("%d", &pos);

    struct Node* newNode = createNode(value);

    if (head == NULL || pos <= 1) {
        newNode->next = head;
        if (head != NULL)
            head->prev = newNode;
        head = newNode;
        printf("Inserted %d at beginning (pos %d).\n", value, pos);
        return;
    }

    struct Node* temp = head;
    while (temp != NULL && i < pos - 1) {
        temp = temp->next;
        i++;
    }

    if (temp == NULL) {
        printf("Position out of bounds. Inserting at end.\n");
        insertAtEnd(value);
        free(newNode); // prevent memory leak
        return;
    }

    newNode->next = temp->next;
    if (temp->next != NULL)
        temp->next->prev = newNode;
    temp->next = newNode;
    newNode->prev = temp;

    printf("Inserted %d before position %d.\n", value, pos);
}


void insertAfterPosition(int value) {
    int pos, i = 1;
    printf("Enter position to insert after: ");
    scanf("%d", &pos);

    if (head == NULL) {
        head = createNode(value);
        printf("List was empty. Inserted %d as first node.\n", value);
        return;
    }

    struct Node* temp = head;
    while (temp != NULL && i < pos) {
        temp = temp->next;
        i++;
    }

    if (temp == NULL) {
        printf("Position out of bounds. Inserting at end.\n");
        insertAtEnd(value);
        return;
    }

    struct Node* newNode = createNode(value);
    newNode->next = temp->next;
    if (temp->next != NULL)
        temp->next->prev = newNode;
    temp->next = newNode;
    newNode->prev = temp;

    printf("Inserted %d after position %d.\n", value, pos);
}



// Count nodes
void countNodes() {
    int count = 0;
    struct Node* temp = head;
    while (temp != NULL) {
        count++;
        temp = temp->next;
    }
    printf("Number of nodes = %d\n", count);
}

// Reverse list
void reverseList() {
    struct Node *temp = NULL, *curr = head;
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    while (curr != NULL) {
        temp = curr->prev;
        curr->prev = curr->next;
        curr->next = temp;
        curr = curr->prev;
    }
    if (temp != NULL) {
        head = temp->prev;
    }
    printf("List reversed successfully.\n");
}

// Delete from beginning
void deleteFromBeginning() {
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    struct Node* temp = head;
    head = head->next;
    if (head != NULL)
        head->prev = NULL;
    free(temp);
    printf("Deleted node from beginning.\n");
}

// Delete from end
void deleteFromEnd() {
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    if (head->next == NULL) {
        free(head);
        head = NULL;
        printf("Deleted last node.\n");
        return;
    }
    struct Node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->prev->next = NULL;
    free(temp);
    printf("Deleted node from end.\n");
}

// Display list
void displayList() {
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    struct Node* temp = head;
    printf("Doubly Linked List: ");
    while (temp != NULL) {
        printf("%d <-> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

// Main menu
int main() {
    int choice, value;
    printf("\n--- Doubly Linked List Menu ---\n");
        printf("1. Insert at Beginning\n");
        printf("2. Insert at End\n");
        printf("3. Insert in Sorted Order\n");
        printf("4. Insert Before Position\n");
        printf("5. Insert After Position\n");
        printf("6. Count Nodes\n");
        printf("7. Reverse List\n");
        printf("8. Delete from Beginning\n");
        printf("9. Delete from End\n");
        printf("10. Display List\n");
        printf("11. Exit\n");
        printf("===================================\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

    while (1) {
        

        switch (choice) {
            case 1:
                printf("===================================\n");
                printf("Enter value: ");
                scanf("%d", &value);
                insertAtBeginning(value);
                break;
            case 2:
                printf("===================================\n");
                printf("Enter value: ");
                scanf("%d", &value);
                insertAtEnd(value);
                break;
            case 3:
                printf("===================================\n");
                printf("Enter value: ");
                scanf("%d", &value);
                insertSorted(value);
                break;
            case 4:
                printf("===================================\n");
                printf("Enter value: ");
                scanf("%d", &value);
                insertBeforePosition(value);
                break;
            case 5:
                printf("===================================\n");
                printf("Enter value: ");
                scanf("%d", &value);
                insertAfterPosition(value);
                break;
            case 6:
                printf("===================================\n");
                countNodes();
                break;
            case 7:
                printf("===================================\n");
                reverseList();
                break;
            case 8:
                printf("===================================\n");
                deleteFromBeginning();
                break;
            case 9:
                printf("===================================\n");
                deleteFromEnd();
                break;
            case 10:
                printf("===================================\n");
                displayList();
                break;
            case 11:
                printf("===================================\n");
                printf("Exiting...\n");
                exit(0);
            default:
                printf("Invalid choice! Try again.\n");
        }
    }
    return 0;
}
