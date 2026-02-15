//using only array

/* 
#include <stdio.h>
#define MAX 100  // Max exponent supported

void inputPolynomial(int poly[]) {
    int n, coeff, exp;
    printf("Enter number of terms: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("Enter coefficient and exponent: ");
        scanf("%d %d", &coeff, &exp);
        poly[exp] += coeff;  // Store coeff at index = exponent
    }
}

void displayPolynomial(int poly[]) {
    int first = 1;
    for (int i = MAX - 1; i >= 0; i--) {
        if (poly[i] != 0) {
            if (!first && poly[i] > 0)
                printf(" + ");
            printf("%dx^%d", poly[i], i);
            first = 0;
        }
    }
    if (first) // No term found
        printf("0");
    printf("\n");
}

int main() {
    int poly1[MAX] = {0}, poly2[MAX] = {0}, sum[MAX] = {0};

    printf("Enter first polynomial:\n");
    inputPolynomial(poly1);

    printf("Enter second polynomial:\n");
    inputPolynomial(poly2);

    // Add both polynomials
    for (int i = 0; i < MAX; i++) {
        sum[i] = poly1[i] + poly2[i];
    }

    printf("Sum of the polynomials:\n");
    displayPolynomial(sum);

    return 0;
}

 */

//using arry of structure 

/* #include <stdio.h>

#define MAX 20   // Maximum number of terms in a polynomial

// Structure to store one term of polynomial
struct Term {
    int coeff;
    int exp;
};

// Function to input a polynomial
int inputPoly(struct Term poly[]) {
    int n;
    printf("Enter number of terms: ");
    scanf("%d", &n);

    printf("Enter terms (coefficient exponent):\n");
    for (int i = 0; i < n; i++) {
        scanf("%d %d", &poly[i].coeff, &poly[i].exp);
    }
    return n;
}

// Function to display polynomial
void displayPoly(struct Term poly[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%dx^%d", poly[i].coeff, poly[i].exp);
        if (i < n - 1)
            printf(" + ");
    }
    printf("\n");
}

// Function to add two polynomials
int addPoly(struct Term poly1[], int n1, struct Term poly2[], int n2, struct Term result[]) {
    int i = 0, j = 0, k = 0;

    while (i < n1 && j < n2) {
        if (poly1[i].exp == poly2[j].exp) {
            result[k].coeff = poly1[i].coeff + poly2[j].coeff;
            result[k].exp = poly1[i].exp;
            i++; j++; k++;
        }
        else if (poly1[i].exp > poly2[j].exp) {
            result[k++] = poly1[i++];
        }
        else {
            result[k++] = poly2[j++];
        }
    }

    // Copy remaining terms
    while (i < n1)
        result[k++] = poly1[i++];
    while (j < n2)
        result[k++] = poly2[j++];

    return k; // return number of terms in result
}

int main() {
    struct Term poly1[MAX], poly2[MAX], result[MAX];
    int n1, n2, n3;

    printf("Enter first polynomial:\n");
    n1 = inputPoly(poly1);

    printf("Enter second polynomial:\n");
    n2 = inputPoly(poly2);

    printf("\nFirst Polynomial: ");
    displayPoly(poly1, n1);

    printf("Second Polynomial: ");
    displayPoly(poly2, n2);

    n3 = addPoly(poly1, n1, poly2, n2, result);

    printf("\nResultant Polynomial: ");
    displayPoly(result, n3);

    return 0;
}
 */

//  using linked list
/* 
#include <stdio.h>
#include <stdlib.h>

// Structure for a polynomial term
struct Node {
    int coeff;
    int exp;
    struct Node *next;
};

// Function to create a new node
struct Node* createNode(int coeff, int exp) {
    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->coeff = coeff;
    newNode->exp = exp;
    newNode->next = NULL;
    return newNode;
}

// Function to insert a term at the end of polynomial
struct Node* insertTerm(struct Node *head, int coeff, int exp) {
    struct Node *newNode = createNode(coeff, exp);
    if (head == NULL)
        return newNode;

    struct Node *temp = head;
    while (temp->next != NULL)
        temp = temp->next;
    temp->next = newNode;
    return head;
}

// Function to display a polynomial
void displayPoly(struct Node *poly) {
    struct Node *temp = poly;
    while (temp != NULL) {
        printf("%dx^%d", temp->coeff, temp->exp);
        if (temp->next != NULL)
            printf(" + ");
        temp = temp->next;
    }
    printf("\n");
}

// Function to add two polynomials
struct Node* addPoly(struct Node *poly1, struct Node *poly2) {
    struct Node *result = NULL;
    struct Node *p1 = poly1, *p2 = poly2;

    while (p1 != NULL && p2 != NULL) {
        if (p1->exp == p2->exp) {
            result = insertTerm(result, p1->coeff + p2->coeff, p1->exp);
            p1 = p1->next;
            p2 = p2->next;
        }
        else if (p1->exp > p2->exp) {
            result = insertTerm(result, p1->coeff, p1->exp);
            p1 = p1->next;
        }
        else {
            result = insertTerm(result, p2->coeff, p2->exp);
            p2 = p2->next;
        }
    }

    // Add remaining terms
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

// Main function
int main() {
    struct Node *poly1 = NULL, *poly2 = NULL, *result = NULL;
    int n1, n2, coeff, exp;

    printf("Enter number of terms in first polynomial: ");
    scanf("%d", &n1);
    printf("Enter terms (coefficient exponent):\n");
    for (int i = 0; i < n1; i++) {
        scanf("%d %d", &coeff, &exp);
        poly1 = insertTerm(poly1, coeff, exp);
    }

    printf("\nEnter number of terms in second polynomial: ");
    scanf("%d", &n2);
    printf("Enter terms (coefficient exponent):\n");
    for (int i = 0; i < n2; i++) {
        scanf("%d %d", &coeff, &exp);
        poly2 = insertTerm(poly2, coeff, exp);
    }

    printf("\nFirst Polynomial: ");
    displayPoly(poly1);

    printf("Second Polynomial: ");
    displayPoly(poly2);

    result = addPoly(poly1, poly2);

    printf("\nResultant Polynomial: ");
    displayPoly(result);

    return 0;
}

 */