#include <stdio.h>
#include <ctype.h>
#include <string.h>
#define SIZE 100

// ---------- Stack for operators ----------
char opStack[SIZE];
int top = -1;

void push(char c) { opStack[++top] = c; }
char pop() { return opStack[top--]; }
char peek() { return opStack[top]; }
int isEmpty() { return top == -1; }

int precedence(char op) {
    if (op == '^') return 3;
    if (op == '*' || op == '/') return 2;
    if (op == '+' || op == '-') return 1;
    return 0;
}

// ---------- Infix to Postfix ----------
void infixToPostfix(char* infix, char* postfix) {
    int i, k = 0;
    for (i = 0; infix[i]; i++) {
        char c = infix[i];
        if (isalnum(c)) {
            postfix[k++] = c;
        } 
        else if (c == '(') {
            push(c);
        } 
        else if (c == ')') {
            while (!isEmpty() && peek() != '(')
                postfix[k++] = pop();
            pop(); // remove '('
        } 
        else { // operator
            while (!isEmpty() && precedence(peek()) >= precedence(c))
                postfix[k++] = pop();
            push(c);
        }
    }
    while (!isEmpty())
        postfix[k++] = pop();
    postfix[k] = '\0';
}

// ---------- Stack for evaluation ----------
int evalStack[SIZE];
int topEval = -1;

void pushEval(int x) { evalStack[++topEval] = x; }
int popEval() { return evalStack[topEval--]; }

// ---------- Postfix Evaluation ----------
int evaluatePostfix(char* postfix) {
    int i, op1, op2;
    for (i = 0; postfix[i]; i++) {
        char c = postfix[i];
        if (isdigit(c)) {
            pushEval(c - '0'); // convert char to int
        } 
        else {
            op2 = popEval();
            op1 = popEval();
            switch (c) {
                case '+': pushEval(op1 + op2); break;
                case '-': pushEval(op1 - op2); break;
                case '*': pushEval(op1 * op2); break;
                case '/': pushEval(op1 / op2); break;
            }
        }
    }
    return popEval();
}

// ---------- Main ----------
int main() {
    char infix[SIZE], postfix[SIZE];
    printf("Enter infix expression: ");
    scanf("%s", infix);

    infixToPostfix(infix, postfix);
    printf("Postfix expression: %s\n", postfix);

    printf("Evaluation result: %d\n", evaluatePostfix(postfix));
    return 0;
}
