#include<stdio.h>
#include<malloc.h>

typedef struct Queue {
	int * arrayP;
	int front;
	int rear;
} QUEUE, * QUEUEP;

void init(QUEUEP queueP) {
	queueP->arrayP =  malloc(sizeof(int) * 6); 
	queueP->front = 0;
	queueP->rear = 0;
} 

int enqueue(QUEUEP queueP, int value) {
	if (isFull(queueP)) {
		return 0;
	} else {
		queueP->arrayP[queueP->rear] = value;
		queueP->rear = (++queueP->rear) % 6;
		return 1;
	}
}

int outQueue(QUEUEP queueP, int * valP) {
	if (!isEmpty(queueP)) {
		*valP = queueP->arrayP[queueP->front];
		++queueP->front;
		return 1;
	} else {
		return 0;
	}
}

void traverseQueue(QUEUEP queueP) {
	if (!isEmpty(queueP)) {
		int i;
		for (i = queueP->front; i != queueP->rear; i = (i + 1) % 6) {
			printf("%d  ", queueP->arrayP[i]);
		}
		printf("\n");
	}
}

int isFull(QUEUEP queueP) {
	if ((queueP->rear + 1) % 6 == queueP->front) {
		return 1;
	} else {
		return 0;
	}
}

int isEmpty(QUEUEP queueP) {
	if (queueP->front == queueP->rear) {
		return 1;
	} else {
		return 0;
	}
}

void clear(QUEUEP queueP) {
	queueP->front = 0;
	queueP->rear = 0;
}

main() {
	QUEUE queue;
	init(&queue);
	enqueue(&queue, 1);	
	enqueue(&queue, 2);
	enqueue(&queue, 3);
	enqueue(&queue, 4);
	enqueue(&queue, 5);
	enqueue(&queue, 6);
	traverseQueue(&queue);
	
	int value;
	int result = outQueue(&queue, &value);
	if (result == 0) { 
		printf("出队失败\n");
	} else {
		printf("出队成功，出队的元素为：%d\n", value);
	}
	traverseQueue(&queue);
	
	clear(&queue);
	printf("清空队列后：\n");
	traverseQueue(&queue);
}
