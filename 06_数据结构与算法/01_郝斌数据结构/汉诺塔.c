#include<stdio.h>
/**
	@n ��������
	@discFromLocation ��������λ��	
	@discToLocation ����Ŀ��λ��
	@discTempLocation ������ʱλ��
*/
void towerOfHanoi(int n, char discFromLocation, char discToLocation, char discTempLocation) {
	if (n >= 1) {	// ����Ҫ��һ�����̲���Ҫ�Ƶ� 
		// 1����n - 1 �����̴� discFromLocation �Ƶ� discTempLocation���ݹ���ã� 
		towerOfHanoi(n - 1, discFromLocation, discTempLocation, discToLocation);
		
		// 2����discFromLocation��ʣ�µ����Ĵ����Ƶ�discToLocation�������ƶ�������ݹ飬ֱ������� 
		printf("%c -> %c\n", discFromLocation, discToLocation);
		
		// 3������1�Ѿ���n - 1�������Ƶ���discTempLocation������������Ҫ��discTempLocation�еĴ����Ƶ�discToLocation
		towerOfHanoi(n - 1, discTempLocation, discToLocation, discFromLocation);
	}
}
 
main() {
	int  n;
	printf("��������̵ĸ�����");
	scanf("%d", &n);
	char discFromLocation = 'A';
	char discToLocation ='C';
	char discTempLocation = 'B';
	towerOfHanoi(n, discFromLocation, discToLocation, discTempLocation);
	system("pause");
} 
