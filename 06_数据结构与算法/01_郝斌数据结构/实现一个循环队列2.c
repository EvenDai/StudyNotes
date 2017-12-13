#include<stdio.h>
#include<malloc.h>

typedef struct Queue {
	int * arrayP;
	int front;
	int rear;
} QUEUE, * QUEUEP;

void init(QUEUEP queueP) {
	queueP->arrayP =  malloc(sizeof(int) * 6); 
	queueP->front = -1;
	queueP->rear = -1;
} 

int enqueue(QUEUEP queueP, int value) {
	if (isFull(queueP)) {
		return 0;
	} else {	
		if (isEmpty(queueP)) {// 如果之前是空的 
			queueP->front = 0;	
		}
		
		queueP->rear = (++queueP->rear) % 6;
		queueP->arrayP[queueP->rear] = value;	
	}
}

int outQueue(QUEUEP queueP, int * valP) {
	if (!isEmpty(queueP)) {
		*valP = queueP->arrayP[queueP->front];
		if (queueP->front == queueP->rear) {
			// 如果front和rear相等，说明此时队列中只有一个元素，删除后为空，恢复初始化状态
			queueP->front = -1;
			queueP->rear = -1; 
		} else {
			++queueP->front;
		}		
		return 1;
	} else {
		return 0;
	}
}

void traverseQueue(QUEUEP queueP) {
	if (!isEmpty(queueP)) {	
		int i = queueP->front;
		int isEnd = 0;
		do {
			printf("%d  ", queueP->arrayP[i]);
			if (i == queueP->rear) {
				isEnd = 1;	// 如果i已经遍历到最后一个元素，则结束循环 
			}
			i = (i + 1) % 6;
		} while(isEnd != 1);
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
	if (queueP->front == -1 && queueP->rear == -1) {
		return 1;
	} else {
		return 0;
	}
}



void clear(QUEUEP queueP) {
	queueP->front = -1;
	queueP->rear = -1;
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
