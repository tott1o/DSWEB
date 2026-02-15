#  Polynomial Representation and Addition  

## 1. Polynomial Basics  

A polynomial looks like:  

\[
P(x) = 5x^3 + 2x^2 - 7x + 9
\]

Each **term** has two parts:  
- **Coefficient** → (5, 2, -7, 9)  
- **Exponent** → (3, 2, 1, 0)  

We store a polynomial as a set of `(coefficient, exponent)` pairs.

---

## 2. Representation of Polynomials  

### 2.1 Using Arrays  

We use an **array of structures** where each element stores one term.  

```c
struct Term {
    int coeff;
    int exp;
};
```

Example: `5x³ + 2x² - 7x + 9`  

| Index | Coefficient | Exponent |
|-------|-------------|----------|
| 0     | 5           | 3        |
| 1     | 2           | 2        |
| 2     | -7          | 1        |
| 3     | 9           | 0        |

Diagram:
```
poly[] → [ (5,3) ] → [ (2,2) ] → [ (-7,1) ] → [ (9,0) ]
```

---

### 2.2 Using Linked Lists  

Each node stores a term `(coeff, exp)` and a pointer to the next node.  

```c
struct Term {
    int coeff;
    int exp;
    struct Term* next;
};
```

Example: `5x³ + 2x² - 7x + 9`  

Diagram:
```
(5,3) → (2,2) → (-7,1) → (9,0) → NULL
```

---

## 3. Polynomial Addition  

### 3.1 Concept  

To add two polynomials:  

\[
P1(x) = 5x^3 + 2x^2 - 7x + 9
\]  
\[
P2(x) = 3x^2 + 4x + 2
\]  

We compare terms with the same exponent and **add coefficients**.  

Result:  
\[
P(x) = 5x^3 + (2+3)x^2 + (-7+4)x + (9+2)
\]  
\[
P(x) = 5x^3 + 5x^2 - 3x + 11
\]

---

### 3.2 Algorithm (Array Version)  
**Steps**:  
1. Start with two arrays storing terms in descending exponent order.  
2. Compare exponents term by term.  
3. If exponents match → add coefficients.  
4. Else → copy the term with the higher exponent.  
5. Continue until all terms are processed.  

**Pseudocode**:
```
function addPoly(p1[], p2[]):
    i = 0, j = 0
    while i < n1 and j < n2:
        if p1[i].exp > p2[j].exp:
            result.add(p1[i])
            i++
        else if p2[j].exp > p1[i].exp:
            result.add(p2[j])
            j++
        else:
            coeff = p1[i].coeff + p2[j].coeff
            if coeff != 0:
                result.add(coeff, p1[i].exp)
            i++; j++;
    copy remaining terms
    return result
```

---

### 3.3 Algorithm (Linked List Version)  

**Steps**:  
1. Traverse both lists simultaneously.  
2. If exponents are equal → sum coefficients.  
3. If one exponent is bigger → copy that node.  
4. Append leftover nodes.  

**Pseudocode**:
```
function addPoly(p1, p2):
    result = NULL
    while p1 != NULL and p2 != NULL:
        if p1.exp > p2.exp:
            insert(result, p1.coeff, p1.exp)
            p1 = p1.next
        else if p2.exp > p1.exp:
            insert(result, p2.coeff, p2.exp)
            p2 = p2.next
        else:
            coeff = p1.coeff + p2.coeff
            if coeff != 0:
                insert(result, coeff, p1.exp)
            p1 = p1.next
            p2 = p2.next
    append remaining terms
    return result
```

---

## 4. C Implementations  

### 4.1 Array Implementation  

```c
#include <stdio.h>
#include <math.h>

struct Term {
    int coeff;
    int exp;
};

void display(struct Term poly[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%dx^%d", poly[i].coeff, poly[i].exp);
        if (i < n-1) printf(" + ");
    }
    printf("\n");
}

void addPoly(struct Term p1[], int n1, struct Term p2[], int n2) {
    int i = 0, j = 0;
    while (i < n1 && j < n2) {
        if (p1[i].exp > p2[j].exp) {
            printf("%dx^%d + ", p1[i].coeff, p1[i].exp);
            i++;
        }
        else if (p2[j].exp > p1[i].exp) {
            printf("%dx^%d + ", p2[j].coeff, p2[j].exp);
            j++;
        }
        else {
            printf("%dx^%d + ", p1[i].coeff + p2[j].coeff, p1[i].exp);
            i++; j++;
        }
    }
    while (i < n1) printf("%dx^%d + ", p1[i].coeff, p1[i].exp), i++;
    while (j < n2) printf("%dx^%d + ", p2[j].coeff, p2[j].exp), j++;
    printf("\n");
}

int evaluate(struct Term poly[], int n, int x) {
    int result = 0;
    for (int i = 0; i < n; i++) {
        result += poly[i].coeff * pow(x, poly[i].exp);
    }
    return result;
}

int main() {
    struct Term p1[] = {{5,3}, {2,2}, {-7,1}, {9,0}};
    struct Term p2[] = {{3,2}, {4,1}, {2,0}};
    int n1 = 4, n2 = 3;

    printf("P1: "); display(p1, n1);
    printf("P2: "); display(p2, n2);

    printf("Sum: ");
    addPoly(p1, n1, p2, n2);

    printf("Evaluation P1 at x=2: %d\n", evaluate(p1, n1, 2));
    return 0;
}
```

---

### 4.2 Linked List Implementation  

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct Term {
    int coeff;
    int exp;
    struct Term* next;
};

struct Term* createNode(int c, int e) {
    struct Term* newNode = (struct Term*)malloc(sizeof(struct Term));
    newNode->coeff = c;
    newNode->exp = e;
    newNode->next = NULL;
    return newNode;
}

void insert(struct Term** head, int c, int e) {
    struct Term* newNode = createNode(c,e);
    if (*head == NULL) *head = newNode;
    else {
        struct Term* temp = *head;
        while (temp->next != NULL) temp = temp->next;
        temp->next = newNode;
    }
}

void display(struct Term* head) {
    while (head != NULL) {
        printf("%dx^%d", head->coeff, head->exp);
        if (head->next != NULL) printf(" + ");
        head = head->next;
    }
    printf("\n");
}

struct Term* addPoly(struct Term* p1, struct Term* p2) {
    struct Term* result = NULL;
    while (p1 && p2) {
        if (p1->exp > p2->exp) {
            insert(&result, p1->coeff, p1->exp);
            p1 = p1->next;
        }
        else if (p2->exp > p1->exp) {
            insert(&result, p2->coeff, p2->exp);
            p2 = p2->next;
        }
        else {
            insert(&result, p1->coeff + p2->coeff, p1->exp);
            p1 = p1->next; p2 = p2->next;
        }
    }
    while (p1) { insert(&result, p1->coeff, p1->exp); p1 = p1->next; }
    while (p2) { insert(&result, p2->coeff, p2->exp); p2 = p2->next; }
    return result;
}

int evaluate(struct Term* head, int x) {
    int result = 0;
    while (head) {
        result += head->coeff * pow(x, head->exp);
        head = head->next;
    }
    return result;
}

int main() {
    struct Term* p1 = NULL;
    struct Term* p2 = NULL;

    insert(&p1, 5,3); insert(&p1, 2,2); insert(&p1,-7,1); insert(&p1,9,0);
    insert(&p2, 3,2); insert(&p2, 4,1); insert(&p2,2,0);

    printf("P1: "); display(p1);
    printf("P2: "); display(p2);

    struct Term* sum = addPoly(p1,p2);
    printf("Sum: "); display(sum);

    printf("Evaluation P1 at x=2: %d\n", evaluate(p1,2));
}
```

---

## 5. Key Takeaways  

- **Array representation** is simple but requires fixed size.  
- **Linked list representation** is dynamic and flexible.  
- Polynomial addition works by comparing exponents and combining terms.  
- Evaluation substitutes a value of `x` into the polynomial.  
