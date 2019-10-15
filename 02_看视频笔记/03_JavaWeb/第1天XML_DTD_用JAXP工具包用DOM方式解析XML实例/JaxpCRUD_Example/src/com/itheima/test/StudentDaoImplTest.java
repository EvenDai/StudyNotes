package com.itheima.test;

import com.itheima.dao.StudentDaoImpl;
import com.itheima.domain.Student;

public class StudentDaoImplTest {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		StudentDaoImpl dao = new StudentDaoImpl();
//		Student student = new Student();
//		student.setIdcard("438");
//		student.setExamid("520");
//		student.setName("∞¢Ωø");
//		student.setLocation("œ„∏€");
//		student.setGrade(99f);
//		dao.addStudent(student);
//		Student s = dao.queryStudent("520");
//		System.out.println(s.getName());
		dao.deleteStudent("∞¢Ωø");
	}

}
