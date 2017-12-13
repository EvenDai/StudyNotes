#include<stdio.h>
#include<malloc.h>

typedef struct Node {
	int data;
	struct Node * nextP;
}NODE, *NODEP;

typedef struct Stack {
	NODEP stackTopP;
}STACK, *STACKP;

// ��ջ
void push(STACKP stackP, int e) {
	// �����ڵ� 
	NODEP newNodeP = malloc(sizeof(NODE));
	newNodeP->data = e;
	newNodeP->nextP = NULL;
	
	// ���½ڵ���ջ 
	newNodeP->nextP = stackP->stackTopP;
	stackP->stackTopP = newNodeP;

}

// ����ջ 
void traverseStack(STACKP stackP) {
	NODEP nodeP = stackP->stackTopP;
	while (nodeP != NULL) {
		printf("%d  ", nodeP->data);
		nodeP = nodeP->nextP;
	}
	printf("\n");
}

// ��ջ������ֵ�����Ƿ��ջ�ɹ���eP���ڱ����ջ��Ԫ�� 
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
	if (stackP->stackTopP == NULL) {
		return 1;
	} else {
		return 0;
	}
} 

void clear(STACKP stackP) {
	if (!isEmpty(stackP)) {
		NODEP stackTopP = stackP->stackTopP;
		while (stackTopP != NULL) {
			stackP->stackTopP = stackTopP->nextP;
			free(stackTopP);
			stackTopP = stackP->stackTopP;
		}
	}
}

main() {
	STACK stack = {NULL};
	push(&stack, 1);
	push(&stack, 2);
	push(&stack, 3);
	push(&stack, 4);
	push(&stack, 5);
	traverseStack(&stack);
	
	int val;
	int result = pop(&stack, &val);
	if (result == 0) {
		printf("��ջʧ��\n");
	} else {
		printf("��ջ�ɹ�����������Ԫ���ǣ�%d\n", val);
		traverseStack(&stack);
	}	
	
	clear(&stack);
	traverseStack(&stack);
} 
