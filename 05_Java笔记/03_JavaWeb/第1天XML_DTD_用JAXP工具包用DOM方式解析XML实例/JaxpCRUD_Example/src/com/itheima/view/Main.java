package com.itheima.view;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import com.itheima.dao.StudentDaoImpl;
import com.itheima.domain.Student;

public class Main {

	public static void main(String[] args) {
		try{
			StudentDaoImpl dao = new StudentDaoImpl();
			System.out.println("a�����ѧ��\tb��ɾ��ѧ��\tc����ѯѧ��");
			System.out.println("������������ͣ�");
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			String operation = br.readLine();
			if("a".equals(operation)){
				//���
				System.out.println("������������");
				String name = br.readLine();
				System.out.println("���������֤�ţ�");
				String idcard = br.readLine();
				System.out.println("������׼��֤�ţ�");
				String examid = br.readLine();
				System.out.println("��������磺");
				String location = br.readLine();
				System.out.println("������ɼ���");
				String grade = br.readLine();
				
				Student student = new Student();
				student.setExamid(examid);
				student.setGrade(Float.parseFloat(grade));
				student.setIdcard(idcard);
				student.setLocation(location);
				student.setName(name);
				boolean result = dao.addStudent(student);
				if(result){
					System.out.println("��ϲ����ӳɹ�");
				}else{
					System.out.println("�Բ��𣡷�����æ");
				}
			}else if("b".equals(operation)){
				//ɾ��
				System.out.println("������Ҫɾ����ѧ������");
				String name = br.readLine();
				boolean result = dao.deleteStudent(name);
				if(result){
					System.out.println("��ϲ��ɾ���ɹ�");
				}else{
					System.out.println("�Բ�����ɾ����ѧ�����ܲ�����");
				}
			}else if("c".equals(operation)){
				//��ѯ
				System.out.println("������Ҫ��ѯ��׼��֤�ţ�");
				String examid = br.readLine();
				Student s = dao.queryStudent(examid);
				if(s==null)
					System.out.println("���޴���");
				else
					System.out.println(s);
			}else{
				System.out.println("���������");
			}
		}catch(Exception e){
			System.out.println("�Բ��𣡷�����æ");
		}
	}

}
