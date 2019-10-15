package com.itheima.view;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import com.itheima.dao.StudentDaoImpl;
import com.itheima.domain.Student;

public class Main {

	public static void main(String[] args) {
		try{
			StudentDaoImpl dao = new StudentDaoImpl();
			System.out.println("a、添加学生\tb、删除学生\tc、查询学生");
			System.out.println("请输入操作类型：");
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			String operation = br.readLine();
			if("a".equals(operation)){
				//添加
				System.out.println("请输入姓名：");
				String name = br.readLine();
				System.out.println("请输入身份证号：");
				String idcard = br.readLine();
				System.out.println("请输入准考证号：");
				String examid = br.readLine();
				System.out.println("请输入故乡：");
				String location = br.readLine();
				System.out.println("请输入成绩：");
				String grade = br.readLine();
				
				Student student = new Student();
				student.setExamid(examid);
				student.setGrade(Float.parseFloat(grade));
				student.setIdcard(idcard);
				student.setLocation(location);
				student.setName(name);
				boolean result = dao.addStudent(student);
				if(result){
					System.out.println("恭喜！添加成功");
				}else{
					System.out.println("对不起！服务器忙");
				}
			}else if("b".equals(operation)){
				//删除
				System.out.println("请输入要删除的学生姓名");
				String name = br.readLine();
				boolean result = dao.deleteStudent(name);
				if(result){
					System.out.println("恭喜！删除成功");
				}else{
					System.out.println("对不起！您删除的学生可能不存在");
				}
			}else if("c".equals(operation)){
				//查询
				System.out.println("请输入要查询的准考证号：");
				String examid = br.readLine();
				Student s = dao.queryStudent(examid);
				if(s==null)
					System.out.println("查无此人");
				else
					System.out.println(s);
			}else{
				System.out.println("你火星来的");
			}
		}catch(Exception e){
			System.out.println("对不起！服务器忙");
		}
	}

}
