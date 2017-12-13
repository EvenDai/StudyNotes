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
	NODEP firstP = NULL;	// �׽ڵ� 
	NODEP endP = NULL;		// β��� 
	printf("����������Ҫ���ɵ�����ڵ�ĸ�����len = ");
	scanf("%d", &len);
	
	for(i = 0; i < len; i++) {
		printf("�������%d���ڵ��ֵ��", i + 1);
		scanf("%d", &data);
		
		// ������һ���ڵ� 
		NODEP nodeP = malloc(sizeof(NODE));
		nodeP->data = data;
		nodeP->nextP = NULL; 
		
		if (i == 0) {	// ����ǵ�һ���ڵ� 
			firstP = nodeP;
			endP = nodeP;
		} else {
			endP->nextP = nodeP;
			endP = nodeP;
		}			
	} 	
	
	return firstP;
}

// �������� 
traverseList(NODEP firstP) {
	NODEP nodeP = firstP;
	while (nodeP != NULL) {
		printf("%d  ", nodeP->data);
		nodeP = nodeP->nextP;
	}
	printf("\n"); 
}

int isEmpty (NODEP firstP) {
	if (firstP == NULL) {
		return 1;
	} else {
		return 0;
	}
}

int listLength(NODEP firstP) {
	NODEP nodeP = firstP;
	int lenght = 0; 
	while (nodeP != NULL) {
		nodeP = nodeP->nextP;
		lenght++;
	}
	return lenght;
}

NODEP sort(NODEP firstP) {
	int length = listLength(firstP);
	if (length < 2) {
		return;
	}
	
	int swapCount;
	int i;	
	for (swapCount = length - 1; swapCount > 0; swapCount--) {
		NODEP currentNodeP = firstP;	// ��ǰ���ڱȽ��Ƿ�Ҫ����λ�õĽڵ� 
		NODEP preNodeP = NULL;		// ��ǰ�ڵ��ǰһ���ڵ� 
		NODEP secondNodeP;			// ��ǰ�ڵ����һ���ڵ� 
		for (i = 0; i < swapCount; i++) {				
			if(currentNodeP->data > currentNodeP->nextP->data){				
				secondNodeP =  currentNodeP->nextP;			// ����ڶ����ڵ�
				if (preNodeP != NULL) {
					preNodeP->nextP = secondNodeP;				// ǰ�ڵ�ָ��ڶ����ڵ�	
				}
				currentNodeP->nextP = secondNodeP->nextP;	// ��ǰ�ڵ�ָ��������ڵ�	
				secondNodeP->nextP = currentNodeP; 			// �ڶ����ڵ�ָ��ǰ�ڵ�
				preNodeP = 	secondNodeP;					// secondNodeP��ΪpreNodeP
				if (i == 0) {	// ����ǵ�һ�ν��������׽ڵ㷢���˸ı䣬��Ҫ����һ���׽ڵ� 
					firstP = secondNodeP;
				}
				//currentNodeP = currentNodeP->nextP; // ����λ�ú�currentNodeP��secondNodeP�ĺ��棬����currentNodePֱ�ӽ�����һ�ֱȽ�	
			} else {
				// ���û�н���������ǰ�ڵ��Ϊǰ�ڵ㣬��ǰ�ڵ����һ���ڵ��Ϊ��ǰ�ڵ�
				preNodeP = currentNodeP;
				currentNodeP = currentNodeP->nextP;	
			}			
		}
	}
	return firstP;
}

// ������firstP��indexλ�ò���һ���ڵ㣬������data���� 
NODEP insert(NODEP firstP, int index, int data, int * result) {
	NODEP nodeP = firstP;
	NODEP preNodep = NULL; 
	int i = 0; 
	*result = 0;
	while (nodeP != NULL && i <= index) {
		if (i == index) { // λ���ҵ������в������
			 NODEP newNodeP = malloc(sizeof(NODE));
			 newNodeP->data = data;
			 
			 if (nodeP == firstP) {	// �������λ�õĵ�ǰ�ڵ����׽ڵ㣬���׽ڵ㲻����֮ǰ���Ǹ��ڵ�	
			 	firstP = newNodeP; 			 	
			 } else {				// �������λ�õĵ�ǰ�ڵ㲻���׽ڵ�
			 	preNodep->nextP = newNodeP;
			 }
			 
			 newNodeP->nextP = nodeP;
			 *result = 1;
		} else {
			preNodep = nodeP;
			nodeP = nodeP->nextP;			
		}
		i++;
	}
	return firstP;
} 

// ɾ������headP��indexλ�õ�Ԫ�� 
NODEP delete(NODEP firstP, int index, int * data, int * result) {
	NODEP nodeP = firstP;
	NODEP preNodep = NULL; 
	int i = 0; 
	*result = 0;
	while (nodeP != NULL && i <= index) {
		if (i == index) { // λ���ҵ�������ɾ������
			 *data = nodeP->data;
			 if (nodeP == firstP)  {// ���ɾ�������׽ڵ㣬���׽ڵ㲻����֮ǰ���Ǹ��ڵ�	
			 	firstP =  firstP->nextP; 			 	
			 } else {				// ���ɾ���Ĳ��׽ڵ�	
			 	preNodep->nextP = nodeP->nextP;
			 }
			 
			 free(nodeP);
			 *result = 1;
		} else {
			preNodep = nodeP;
			nodeP = nodeP->nextP;			
		}
		i++;
	}
	return firstP;
}

main() {
	NODEP firstP = createList(); 
	printf("����������Ϊ��"); 
	traverseList(firstP);
	
	int result = isEmpty(firstP);
	if (result == 1) {
		printf("����Ϊ��\n");
	} else {
		printf("����Ϊ��\n");
	}
	
	printf("������Ϊ%d\n", listLength(firstP));
	
	/*firstP = sort(firstP);
	printf("����������Ϊ��"); 
	traverseList(firstP);  
	
	firstP = insert(firstP, 0, 6, &result); 
	if (result > 0) {
		printf("����ڵ�ɹ���������Ϊ��");
		traverseList(firstP);
	} else {
		printf("����ڵ�ʧ��\n");
	}*/
	
	int data;
	firstP = delete(firstP, 0, &data, &result); 
	if (result > 0) {
		printf("ɾ���ڵ�ɹ���������Ϊ��");
		traverseList(firstP);
		printf("ɾ���Ľڵ�Ϊ��%d\n", data); 
	} else {
		printf("ɾ���ڵ�ʧ��\n");
	}
	 
	
} 
