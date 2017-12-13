#include<stdio.h>
#include<malloc.h>

typedef struct Node {
	int data;
	struct Node * nextP;
}NODE, *NODEP;

NODEP createList() {
	int len;
	int data;
	int i;
	NODEP headP = malloc(sizeof(NODE));	// ͷ��� 
	headP->nextP = NULL;
	NODEP endP = headP;					// β��� 
	printf("����������Ҫ���ɵ�����ڵ�ĸ�����len = ");
	scanf("%d", &len);
	
	for(i = 0; i < len; i++) {
		printf("�������%d���ڵ��ֵ��", i + 1);
		scanf("%d", &data);
		
		NODEP nodeP = malloc(sizeof(NODE));
		nodeP->data = data;
		nodeP->nextP = NULL; 
		
		endP->nextP = nodeP;
		endP = nodeP;		
	} 	
	
	return headP;
}

// �������� 
traverseList(NODEP headP) {
	NODEP nodeP = headP->nextP;
	while (nodeP != NULL) {
		printf("%d  ", nodeP->data);
		nodeP = nodeP->nextP;
	}
	printf("\n"); 
}

int isEmpty (NODEP headP) {
	if (headP->nextP == NULL) {
		return 1;
	} else {
		return 0;
	}
}

int listLength(NODEP headP) {
	NODEP nodeP = headP->nextP;
	int lenght = 0; 
	while (nodeP != NULL) {
		nodeP = nodeP->nextP;
		lenght++;
	}
	return lenght;
}

sort(NODEP headP) {
	int length = listLength(headP);
	if (length < 2) {
		return;
	}
	
	int swapCount;
	int i;	
	for (swapCount = length; swapCount > 0; swapCount--) {
		NODEP currentNodeP = headP;	// ��ǰ���ڱȽ��Ƿ�Ҫ����λ�õĽڵ� 
		NODEP preNodeP = NULL;		// ��ǰ�ڵ��ǰһ���ڵ� 
		NODEP secondNodeP;			// ��ǰ�ڵ����һ���ڵ� 
		for (i = 0; i < swapCount; i++) {				
			if(preNodeP != NULL && currentNodeP->data > currentNodeP->nextP->data){				
				secondNodeP =  currentNodeP->nextP;			// ����ڶ����ڵ�						
				preNodeP->nextP = secondNodeP;				// ǰ�ڵ�ָ��ڶ����ڵ�		
				currentNodeP->nextP = secondNodeP->nextP;	// ��ǰ�ڵ�ָ��������ڵ�	
				secondNodeP->nextP = currentNodeP; 			// �ڶ����ڵ�ָ��ǰ�ڵ�
				preNodeP = 	secondNodeP;					// secondNodeP��ΪpreNodeP
				//currentNodeP = currentNodeP->nextP; // ����λ�ú�currentNodeP��secondNodeP�ĺ��棬����currentNodePֱ�ӽ�����һ�ֱȽ�	
			} else {
				// ���û�н���������ǰ�ڵ��Ϊǰ�ڵ㣬��ǰ�ڵ����һ���ڵ��Ϊ��ǰ�ڵ�
				preNodeP = currentNodeP;
				currentNodeP = currentNodeP->nextP;	
			}			
		}
	}
}

// ������headP��indexλ�ò���һ���ڵ㣬������data���� 
int insert(NODEP headP, int index, int data) {
	NODEP nodeP = headP->nextP;
	NODEP preNodep = headP; 
	int i = 0; 
	int result = 0;
	while (nodeP != NULL && i <= index) {
		if (i == index) { // λ���ҵ�������ɾ������
			 NODEP newNodeP = malloc(sizeof(NODE));
			 newNodeP->data = data;
			 preNodep->nextP = newNodeP;
			 newNodeP->nextP = nodeP;
			 result = 1;
		} else {
			preNodep = nodeP;
			nodeP = nodeP->nextP;			
		}
		i++;
	}
	return result;
} 

// ɾ������headP��indexλ�õ�Ԫ�� 
int delete(NODEP headP, int index, int * data) {
	NODEP nodeP = headP->nextP;
	NODEP preNodep = headP; 
	int i = 0; 
	int result = 0;
	while (nodeP != NULL && i <= index) {
		if (i == index) { // λ���ҵ������в������
			 *data = nodeP->data;
			 preNodep->nextP = nodeP->nextP;
			 free(nodeP);
			 result = 1;
		} else {
			preNodep = nodeP;
			nodeP = nodeP->nextP;			
		}
		i++;
	}
	return result;
}

main() {
	NODEP headP = createList(); 
	printf("����������Ϊ��"); 
	traverseList(headP);
	
	/*int result = isEmpty(headP);
	if (result == 1) {
		printf("����Ϊ��\n");
	} else {
		printf("����Ϊ��\n");
	}
	
	printf("������Ϊ%d\n", listLength(headP));
	
	sort(headP);
	printf("����������Ϊ��"); 
	traverseList(headP); 
	
	int result = insert(headP, 6, 6); 
	if (result > 0) {
		printf("����ڵ�ɹ���������Ϊ��");
		traverseList(headP);
	} else {
		printf("����ڵ�ʧ��\n");
	} */
	
	int data;
	int result = delete(headP, 2, &data); 
	if (result > 0) {
		printf("ɾ���ڵ�ɹ���������Ϊ��");
		traverseList(headP);
		printf("ɾ���Ľڵ�Ϊ��%d\n", data); 
	} else {
		printf("ɾ���ڵ�ʧ��\n");
	} 
	 
	
} 
