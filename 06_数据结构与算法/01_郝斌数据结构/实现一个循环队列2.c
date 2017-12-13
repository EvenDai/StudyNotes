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
		if (isEmpty(queueP)) {// ���֮ǰ�ǿյ� 
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
			// ���front��rear��ȣ�˵����ʱ������ֻ��һ��Ԫ�أ�ɾ����Ϊ�գ��ָ���ʼ��״̬
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
				isEnd = 1;	// ���i�Ѿ����������һ��Ԫ�أ������ѭ�� 
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
		printf("����ʧ��\n");
	} else {
		printf("���ӳɹ������ӵ�Ԫ��Ϊ��%d\n", value);
	}
	traverseQueue(&queue);
	
	clear(&queue);
	printf("��ն��к�\n");
	traverseQueue(&queue);
}
