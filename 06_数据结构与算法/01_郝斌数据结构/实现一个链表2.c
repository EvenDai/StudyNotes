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
	NODEP firstP = NULL;	// 首节点 
	NODEP endP = NULL;		// 尾结点 
	printf("请输入您需要生成的链表节点的个数：len = ");
	scanf("%d", &len);
	
	for(i = 0; i < len; i++) {
		printf("请输入第%d个节点的值：", i + 1);
		scanf("%d", &data);
		
		// 创建出一个节点 
		NODEP nodeP = malloc(sizeof(NODE));
		nodeP->data = data;
		nodeP->nextP = NULL; 
		
		if (i == 0) {	// 如果是第一个节点 
			firstP = nodeP;
			endP = nodeP;
		} else {
			endP->nextP = nodeP;
			endP = nodeP;
		}			
	} 	
	
	return firstP;
}

// 遍历链表 
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
		NODEP currentNodeP = firstP;	// 当前正在比较是否要交换位置的节点 
		NODEP preNodeP = NULL;		// 当前节点的前一个节点 
		NODEP secondNodeP;			// 当前节点的下一个节点 
		for (i = 0; i < swapCount; i++) {				
			if(currentNodeP->data > currentNodeP->nextP->data){				
				secondNodeP =  currentNodeP->nextP;			// 保存第二个节点
				if (preNodeP != NULL) {
					preNodeP->nextP = secondNodeP;				// 前节点指向第二个节点	
				}
				currentNodeP->nextP = secondNodeP->nextP;	// 当前节点指向第三个节点	
				secondNodeP->nextP = currentNodeP; 			// 第二个节点指向当前节点
				preNodeP = 	secondNodeP;					// secondNodeP变为preNodeP
				if (i == 0) {	// 如果是第一次交换，则首节点发生了改变，需要保存一下首节点 
					firstP = secondNodeP;
				}
				//currentNodeP = currentNodeP->nextP; // 交换位置后，currentNodeP在secondNodeP的后面，所以currentNodeP直接进入下一轮比较	
			} else {
				// 如果没有交换过，则当前节点变为前节点，当前节点的下一个节点变为当前节点
				preNodeP = currentNodeP;
				currentNodeP = currentNodeP->nextP;	
			}			
		}
	}
	return firstP;
}

// 在链表firstP的index位置插入一个节点，并存入data数据 
NODEP insert(NODEP firstP, int index, int data, int * result) {
	NODEP nodeP = firstP;
	NODEP preNodep = NULL; 
	int i = 0; 
	*result = 0;
	while (nodeP != NULL && i <= index) {
		if (i == index) { // 位置找到，进行插入操作
			 NODEP newNodeP = malloc(sizeof(NODE));
			 newNodeP->data = data;
			 
			 if (nodeP == firstP) {	// 如果插入位置的当前节点是首节点，则首节点不再是之前的那个节点	
			 	firstP = newNodeP; 			 	
			 } else {				// 如果插入位置的当前节点不是首节点
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

// 删除链表headP第index位置的元素 
NODEP delete(NODEP firstP, int index, int * data, int * result) {
	NODEP nodeP = firstP;
	NODEP preNodep = NULL; 
	int i = 0; 
	*result = 0;
	while (nodeP != NULL && i <= index) {
		if (i == index) { // 位置找到，进行删除操作
			 *data = nodeP->data;
			 if (nodeP == firstP)  {// 如果删除的是首节点，则首节点不再是之前的那个节点	
			 	firstP =  firstP->nextP; 			 	
			 } else {				// 如果删除的不首节点	
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
	printf("创建的链表为："); 
	traverseList(firstP);
	
	int result = isEmpty(firstP);
	if (result == 1) {
		printf("链表为空\n");
	} else {
		printf("链表不为空\n");
	}
	
	printf("链表长度为%d\n", listLength(firstP));
	
	/*firstP = sort(firstP);
	printf("排序后的链表为："); 
	traverseList(firstP);  
	
	firstP = insert(firstP, 0, 6, &result); 
	if (result > 0) {
		printf("插入节点成功，新链表为：");
		traverseList(firstP);
	} else {
		printf("插入节点失败\n");
	}*/
	
	int data;
	firstP = delete(firstP, 0, &data, &result); 
	if (result > 0) {
		printf("删除节点成功，新链表为：");
		traverseList(firstP);
		printf("删除的节点为：%d\n", data); 
	} else {
		printf("删除节点失败\n");
	}
	 
	
} 
