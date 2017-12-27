#include<stdio.h>
/**
	@n 磁盘数量
	@discFromLocation 磁盘所在位置	
	@discToLocation 磁盘目标位置
	@discTempLocation 磁盘临时位置
*/
void towerOfHanoi(int n, char discFromLocation, char discToLocation, char discTempLocation) {
	if (n >= 1) {	// 最少要有一个磁盘才需要移到 
		// 1、把n - 1 个磁盘从 discFromLocation 移到 discTempLocation（递归调用） 
		towerOfHanoi(n - 1, discFromLocation, discTempLocation, discToLocation);
		
		// 2、把discFromLocation中剩下的最大的磁盘移到discToLocation（具体移动，无需递归，直接输出） 
		printf("%c -> %c\n", discFromLocation, discToLocation);
		
		// 3、步骤1已经把n - 1个磁盘移到了discTempLocation，所以现在需要把discTempLocation中的磁盘移到discToLocation
		towerOfHanoi(n - 1, discTempLocation, discToLocation, discFromLocation);
	}
}
 
main() {
	int  n;
	printf("请输入磁盘的个数：");
	scanf("%d", &n);
	char discFromLocation = 'A';
	char discToLocation ='C';
	char discTempLocation = 'B';
	towerOfHanoi(n, discFromLocation, discToLocation, discTempLocation);
	system("pause");
} 
