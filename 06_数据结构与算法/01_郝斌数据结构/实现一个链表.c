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
	NODEP headP = malloc(sizeof(NODE));	// 头结点 
	headP->nextP = NULL;
	NODEP endP = headP;					// 尾结点 
	printf("请输入您需要生成的链表节点的个数：len = ");
	scanf("%d", &len);
	
	for(i = 0; i < len; i++) {
		printf("请输入第%d个节点的值：", i + 1);
		scanf("%d", &data);
		
		NODEP nodeP = malloc(sizeof(NODE));
		nodeP->data = data;
		nodeP->nextP = NULL; 
		
		endP->nextP = nodeP;
		endP = nodeP;		
	} 	
	
	return headP;
}

// 遍历链表 
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
		NODEP currentNodeP = headP;	// 当前正在比较是否要交换位置的节点 
		NODEP preNodeP = NULL;		// 当前节点的前一个节点 
		NODEP secondNodeP;			// 当前节点的下一个节点 
		for (i = 0; i < swapCount; i++) {				
			if(preNodeP != NULL && currentNodeP->data > currentNodeP->nextP->data){				
				secondNodeP =  currentNodeP->nextP;			// 保存第二个节点						
				preNodeP->nextP = secondNodeP;				// 前节点指向第二个节点		
				currentNodeP->nextP = secondNodeP->nextP;	// 当前节点指向第三个节点	
				secondNodeP->nextP = currentNodeP; 			// 第二个节点指向当前节点
				preNodeP = 	secondNodeP;					// secondNodeP变为preNodeP
				//currentNodeP = currentNodeP->nextP; // 交换位置后，currentNodeP在secondNodeP的后面，所以currentNodeP直接进入下一轮比较	
			} else {
				// 如果没有交换过，则当前节点变为前节点，当前节点的下一个节点变为当前节点
				preNodeP = currentNodeP;
				currentNodeP = currentNodeP->nextP;	
			}			
		}
	}
}

// 在链表headP的index位置插入一个节点，并存入data数据 
int insert(NODEP headP, int index, int data) {
	NODEP nodeP = headP->nextP;
	NODEP preNodep = headP; 
	int i = 0; 
	int result = 0;
	while (nodeP != NULL && i <= index) {
		if (i == index) { // 位置找到，进行删除操作
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

// 删除链表headP第index位置的元素 
int delete(NODEP headP, int index, int * data) {
	NODEP nodeP = headP->nextP;
	NODEP preNodep = headP; 
	int i = 0; 
	int result = 0;
	while (nodeP != NULL && i <= index) {
		if (i == index) { // 位置找到，进行插入操作
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
	printf("创建的链表为："); 
	traverseList(headP);
	
	/*int result = isEmpty(headP);
	if (result == 1) {
		printf("链表为空\n");
	} else {
		printf("链表不为空\n");
	}
	
	printf("链表长度为%d\n", listLength(headP));
	
	sort(headP);
	printf("排序后的链表为："); 
	traverseList(headP); 
	
	int result = insert(headP, 6, 6); 
	if (result > 0) {
		printf("插入节点成功，新链表为：");
		traverseList(headP);
	} else {
		printf("插入节点失败\n");
	} */
	
	int data;
	int result = delete(headP, 2, &data); 
	if (result > 0) {
		printf("删除节点成功，新链表为：");
		traverseList(headP);
		printf("删除的节点为：%d\n", data); 
	} else {
		printf("删除节点失败\n");
	} 
	 
	
} 
