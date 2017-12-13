#include<stdio.h>
#include<malloc.h>

typedef struct Node {
	int data;
	struct Node * nextP;
}NODE, *NODEP;

typedef struct Stack {
	NODEP stackTopP;
	NODEP stackBottomP;
}STACK, *STACKP;

// 初始化栈 
void init(STACKP stackP) {
	NODEP nodeP = malloc(sizeof(NODE));
	nodeP->nextP = NULL;
	stackP->stackBottomP = nodeP;
	stackP->stackTopP = nodeP;
} 

// 入栈
void push(STACKP stackP, int e) {
	NODEP newNodeP = malloc(sizeof(NODE));
	newNodeP->data = e;
	newNodeP->nextP = stackP->stackTopP;
	stackP->stackTopP = newNodeP;
}

// 遍历栈 
void traverseStack(STACKP stackP) {
	NODEP nodeP = stackP->stackTopP;
	while (nodeP != stackP->stackBottomP) {
		printf("%d  ", nodeP->data);
		nodeP = nodeP->nextP;
	}
	printf("\n");
}

// 出栈，返回值代表是否出栈成功，eP用于保存出栈的元素 
int pop(STACKP stackP, int * eP) {
	if (!isEmpty(stackP)) {
		NODEP popNodeP = stackP->stackTopP;		
		stackP->stackTopP = popNodeP->nextP;
		*eP = popNodeP->data;
		free(popNodeP);
		return 1;
	} else {
		return 0;	
	} 
}

int isEmpty(STACKP stackP) {
	if (stackP->stackBottomP == stackP->stackTopP) {
		return 1;
	} else {
		return 0;
	}
} 

void clear(STACKP stackP) {
	if (!isEmpty(stackP)) {
		NODEP stackTopP = stackP->stackTopP;
		while (stackTopP != stackP->stackBottomP) {
			stackP->stackTopP = stackTopP->nextP;
			free(stackTopP);
			stackTopP = stackP->stackTopP;
		}
	}
}

main() {
	STACK stack;
	init(&stack);
	push(&stack, 1);
	push(&stack, 2);
	push(&stack, 3);
	push(&stack, 4);
	push(&stack, 5);
	traverseStack(&stack);
	
	/*int val;
	int result = pop(&stack, &val);
	if (result == 0) {
		printf("弹栈失败\n");
	} else {
		printf("弹栈成功，弹出来的元素是：%d\n", val);
	}*/ 
	
	clear(&stack);
	traverseStack(&stack);
} 
