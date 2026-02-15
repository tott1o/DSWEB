#include <stdio.h>
#include <stdlib.h>

// Structure to represent a term of the polynomial
struct Node {
    int coeff;
    int exp;
    struct Node* next;
};

// Function to create a new node
struct Node* createNode(int coeff, int exp) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->coeff = coeff;
    newNode->exp = exp;
    newNode->next = NULL;
    return newNode;
}

// Function to insert a term into a polynomial in descending order of exponent
struct Node* insertTerm(struct Node* head, int coeff, int exp) {
    if (coeff == 0) return head;

    struct Node* newNode = createNode(coeff, exp);
    if (head == NULL || exp > head->exp) {
        newNode->next = head;
        return newNode;
    }

    struct Node* temp = head;
    struct Node* prev = NULL;

    while (temp != NULL && temp->exp > exp) {
        prev = temp;
        temp = temp->next;
    }

    if (temp != NULL && temp->exp == exp) {
        temp->coeff += coeff;
        free(newNode);
        return head;
    }

    newNode->next = temp;
    if (prev != NULL)
        prev->next = newNode;
    else
        head = newNode;

    return head;
}

// Function to read a polynomial
struct Node* readPoly() {
    int n, coeff, exp;
    struct Node* poly = NULL;

    printf("Enter number of terms: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("Enter coefficient and exponent (e.g., 5 3 for 5x^3): ");
        scanf("%d %d", &coeff, &exp);
        poly = insertTerm(poly, coeff, exp);
    }

    return poly;
}

// Function to display a polynomial
void displayPoly(struct Node* poly) {
    if (poly == NULL) {
        printf("0");
        return;
    }

    struct Node* temp = poly;
    while (temp != NULL) {
        printf("%dx^%d", temp->coeff, temp->exp);
        temp = temp->next;
        if (temp != NULL)
            printf(" + ");
    }
}

// Function to add two polynomials
struct Node* addPoly(struct Node* p1, struct Node* p2) {
    struct Node* result = NULL;

    while (p1 != NULL && p2 != NULL) {
        if (p1->exp == p2->exp) {
            result = insertTerm(result, p1->coeff + p2->coeff, p1->exp);
            p1 = p1->next;
            p2 = p2->next;
        } else if (p1->exp > p2->exp) {
            result = insertTerm(result, p1->coeff, p1->exp);
            p1 = p1->next;
        } else {
            result = insertTerm(result, p2->coeff, p2->exp);
            p2 = p2->next;
        }
    }

    while (p1 != NULL) {
        result = insertTerm(result, p1->coeff, p1->exp);
        p1 = p1->next;
    }

    while (p2 != NULL) {
        result = insertTerm(result, p2->coeff, p2->exp);
        p2 = p2->next;
    }

    return result;
}

// Function to multiply two polynomials
struct Node* multiplyPoly(struct Node* p1, struct Node* p2) {
    struct Node* result = NULL;

    for (struct Node* ptr1 = p1; ptr1 != NULL; ptr1 = ptr1->next) {
        for (struct Node* ptr2 = p2; ptr2 != NULL; ptr2 = ptr2->next) {
            int coeffProduct = ptr1->coeff * ptr2->coeff;
            int expSum = ptr1->exp + ptr2->exp;
            result = insertTerm(result, coeffProduct, expSum);
        }
    }

    return result;
}

// Main Function
int main() {
    printf("Enter first polynomial:\n");
    struct Node* poly1 = readPoly();

    printf("\nEnter second polynomial:\n");
    struct Node* poly2 = readPoly();

    printf("\nFirst Polynomial: ");
    displayPoly(poly1);

    printf("\nSecond Polynomial: ");
    displayPoly(poly2);

    struct Node* sum = addPoly(poly1, poly2);
    printf("\n\nSum: ");
    displayPoly(sum);

    struct Node* product = multiplyPoly(poly1, poly2);
    printf("\nProduct: ");
    displayPoly(product);

    printf("\n");
    return 0;
}
